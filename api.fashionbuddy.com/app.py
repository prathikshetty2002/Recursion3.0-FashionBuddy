from copyreg import pickle
from fileinput import filename
from math import prod
import random
from turtle import distance
from unicodedata import category
from django.http import HttpResponse
from flask import Flask, jsonify, request, Response
import tensorflow
from tensorflow.keras.preprocessing import image
from tensorflow.keras.layers import GlobalMaxPool2D
from tensorflow.keras.applications.resnet50 import ResNet50,preprocess_input
import numpy as np
from numpy.linalg import norm
from sklearn.neighbors import NearestNeighbors
import pickle
import os


model = ResNet50(weights='imagenet',include_top=False,input_shape=(224,224,3))

model = tensorflow.keras.Sequential([
    model,
    GlobalMaxPool2D()
])

id = "16509.jpg"
imgStr = os.path.join(r"C:\Users\91892\Desktop\fashionbuddy flask\imgs",id)
img = image.load_img(imgStr,target_size=(224,224))
img_array = image.img_to_array(img)
expanded_arr = np.expand_dims(img_array,axis=0)
preprocessed_img = preprocess_input(expanded_arr)
result = model.predict(preprocessed_img).flatten()
norm_res = result/norm(result)



filenames = pickle.load(open('filenames.pkl','rb'))
feature_list = pickle.load(open('fashionmodel.pkl','rb'))









app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Hello</h1>"

@app.run('/similar-products', methods=['GET'])
def similarProducts():
    id = request.args.get('id')
    neighbours = NearestNeighbors(n_neighbors=6,algorithm='brute',metric='euclidean')
    feature_list = np.array(feature_list)
    neighbours.fit(feature_list)
    distance,indices = neighbours.kneighbors([norm_res])
    reclist = []
    for i in indices[0]:
        reclist.append(filenames[i])


@app.run('/home')
def home():
    product_lis = ['1607.jpg','1608.jpg','1609.jpg','1636.jpg']
    n = 20/len(product_lis)
    recommend_list = []
    for product in product_lis:
        neighbours = NearestNeighbors(n_neighbors=n,algorithm='brute',metric='euclidean')
        feature_list = np.array(feature_list)
        neighbours.fit(feature_list)
        distance,indices = neighbours.kneighbors([norm_res])
        for i in indices[0]:
            recommend_list.append(filenames[i])


        
        









@app.route('/random-categorised', methods=['GET'])
def randomCateorised():
    category = request.args.get('category')
    lis = []
    for i in range(20):
        fname = filenames[random.randint(0,3700)]
        lis.append(fname.split('/')[-1])

    return jsonify({'data': lis})
    


if __name__ == '__main__':
    app.run(debug=True)