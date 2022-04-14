# from bs4 import BeautifulSoup
# import requests
# import json
# def scrap_data():
#     url="https://www.imdb.com/india/top-rated-indian-movies/"
#     api=requests.get(url)
#     # print(api)
#     htmlparser=api.content
#     # print(htmlparser)
#     soup=BeautifulSoup(htmlparser,"html.parser")
#     # print(soup)
#     div=soup.find("div",class_="lister")
#     # print(div)
#     main_div=div.find("tbody",class_="lister-list")
#     # print(main_div)
#     tr = main_div.find_all("tr")
#     # print(tr)
#     a=[]
#     var=0
#     for i in tr:
#         var=var+1
#         movie_name=i.find("td",class_="titleColumn").a.get_text()
#         # print(movie_name)
#         # a.append(movie_name)
#         name_1=movie_name
#         year=i.find("td",class_="titleColumn").span.get_text()[1:5]
#         # a.append(year)
#         # print(year)
#         year_1=year
#         rating=i.find("td",class_="ratingColumn imdbRating").strong.get_text()
#         # print(rating)
#         rating1=rating
#         url=i.find("td",class_="posterColumn").a["href"]
#         # print(url)
#         url1="https://www.imdb.com"+url

#         position={"position":var,"movie_name":name_1,"movie_year":year_1,"movie_rating":rating1,"movie_url":url1}
#         a.append(position)
#         with open("movies_data.json","w")as f:
#             json.dump(a,f,indent=4)
#     return(a)
# scrap_data()




# a=9
# def add():
#     print(a)
# add()

#file system
# with open("file.txt","w") as file: 
#     data = file.read()
# do something with data



# for loop
# a=[1,2,3,4]
# for i in range(len(a)):
#     print(i)


# indexing
# while loop
# a=[3,5,7,8]
# i=0
# while i<len(a):
#     print(i)
#     i=i+1


# a={1:3,2:8,3:9}
# for i in a:
#     # print(a[i])      values
#     print(i)             # key 



# i=0
# while i <len(a):
#     print(i)            
#     i=i+1



# numbers=[2,4,6,7,8,9,10,7]
# max=0
# scond_max=0
# i=0
# max=numbers[i]


# while i<len(numbers):
#     if max<numbers[i]:
#         if scond_max<max:
#             scond_max=max
#     # max=numbers[i]
#         else:
#             if scond_max<numbers[i]:
#                 scond_max=numbers[i]
#     i=i+1
# print(scond_max)
#     # i=i+1


# x={'V': [1, 4, 6, 10,11], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
# for i,k in x.items():
#     for j in k:
#         if j%2!=0:
#             x[i].remove(j)
# print(x)



# a=[1,2,13,4,5]
# i=0
# max=0
# while i<len(a):
#     # a[i]=max
#     if max<a[i]:
#         max=a[i]
#     i=i+1
# print(max)


# l=[1,3,3,4,5,6,3,7,9]
# i=0
# a=[]
# while i<len(l):
#     b=l[i]
#     if b not in a:
#         a.append(b)
#     i=i+1
# print(a)


# l=[2,3,4,3,2,4,4,4,6,7,8,8,9,8]
# i=0
# a=[]
# c=0
# while i<len(l):
#     b=l[i]
#     if b not in a:
#         c=c+a[i]
#         a.append(c)
#     i=i+1
# print(c)



# arr = [1, 1, 1, 2, 2,1,5, 2, 2, 3, 3, 3, 3, 3]
# # initializing dict to store frequency of each element
# elements_count = {}

# for element in arr:
#    # checking whether it is in the dict or not
#    if element in elements_count:
#       # incerementing the count by 1
#       elements_count[element] += 1
#    else:
#       # setting the count to 1
#       elements_count[element] = 1
# # printing the elements frequencies
# for key, value in elements_count.items():
#     if key<=value:
#         print(value)

# a=[]
# size=int(input("enter a number "))
# for i in range (size):
#     val=int(input("entre a number "))
#     a.append(val)
# key=int(input("entr a find frequency "))
# count=0
# for i in range (size):
#     if (a[i]==key):
#         count=count=1
#     print(count)



# num=int(input("enter a number"))
# i=0
# a=["q","z"]
# m=[]
# while i<len(a):
#     n=a[i]
#     k=str(n+str(num))
#     m.append(k)
#     i=i+1
# print(m)



# a=[[1,2,3],[4,5,6]]
# i=0
# while i<len(a):
#     j=0
#     while j<len(a[i]):
#         print(a[i][j])
#         j=j+1
#     i=i+1
# c=[]
# while i<len(a):
#     j=0
#     while j<len(a[i]):
#         c.append(a[i][j])
#         j=j+1
#     i=i+1
#     print(c)


# numbers = [50, 40, 23, 70, 56, 12, 5, 10, 7] 

# Iss list ke liye apke program ka output 56 hona chaiye.
# i=0
# k=numbers[0]
# a=[]
# while i<len(numbers):
#     num=numbers[i]
#     if num>k:
#         k=num
#     i=i+1
# numbers.remove(k)
# j=0
# m=numbers[0]
# s=[]
# while j<len(numbers):
#     n=numbers[j]
#     if n>m:
#         m=n
#     j=j+1
# a.append(m)
# print(a)

# i=0
# k=numbers[0]
# a=[]
# while i<len(numbers):
#     num=numbers[i]
#     if num>k:
#         k=num
#     i=i+1
# numbers.remove(k)
# j=0
# m=numbers[0]
# s=[]
# while j<len(numbers):
#     n=numbers[j]
#     if n>m:
#         m=n
#     j=j+1
# a.append(m)
# print(a)



# a=["ppoja",4,6,7,"9"]
# i=0
# b=[]
# while i<len(a):
#     if type(a[i])==str:
#         # print("")
#         b.append(a[i])
#     # print(b)
#     i=i+1
# print(b)
    # i=i+1


# a=[[],4,6,[],8,[],[]]
# list1 = [[], [], [], [], [], 'text', 'text2', [], 'moreText']
# list2 = []
# for item in list1:
#     if item!=[]:
#         list2.append(item)
# print(list2)



# a=[1,-4,-6,7,8,9]
# i=0
# while i<len(a):
#     if a[i]>0:
#         print(a[i],"negative")
#     else:
#         print(a[i],"positive")
#     i=i+1


# a=[1,-4,-6,7,8,9]
# i=0
# b=[]
# while i<len(a):
#     if a[i]>0:
#        b.append (a[i])
#     else:
#         b.append(a[i]*0)

#     i=i+1
# print(b)

# a=[1,3,5,6,7]
# i=1
# b=[]
# while i<=len(a):
#     b.append(a[-i])

#     i=i+1
# print(b)

# a="1"+2+2
# print(a)                                       ##error


# def pypart(n):
     
#     # outer loop to handle number of rows
#     # n in this case
#     for i in range(0, n):
     
#         # inner loop to handle number of columns
#         # values changing acc. to outer loop
#         for j in range(0, i+1):
         
#             # printing stars
#             print("* ",end="")
      
#         # ending line after each row
#         print("\r")
 
# # Driver Code
# n = 5
# pypart(n)

# *
# *  *
# *  *  *

# for i in range(0,5):
#     for j in range(0,i+1):
#         print("* ",end=" ")
#     print()





# n=6
# k=n-1
# for i in range(0,n):
#     for j in range(0,k):
#         print(end=" ")
#     k=k-1
#     for j in range(0,i+1):
#         print("*",end=" ")
#     print()



# 1
# 1 2
# 1 2 3
# 1 2 3

# for i in range(0,5):
#     n=1
#     for j in range(0,i+1):
#         print(n,end="")
#         n=n+1
#     print()



# sort list
# a=[1,3,5,6,7]
# b=[1,2,3,5,6,8]
# i=0
# c=[]
# while i<len(a):
#     c.append(a[i])
#     c.append(b[i])
#     c.sort()
#     i=i+1
# print(c)


  
# res = []
# i=0
# j=0
  
# while i <len(a) and j < len(b):
#     if a[i] < b[j]:
#       res.append(a[i])
#       i += 1
  
#     else:
#       res.append(b[j])
#       j += 1
  
# res = res + a[i:] + b[j:]
# print(res)





num= int(input("enter a numer "))
i=0
c=''
while i<num:
    name=input("enter a name ")
    i=i+1
    c+=name
print(c)