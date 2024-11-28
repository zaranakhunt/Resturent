const foodItem = [
    {
        id : 1,
        name: 'Sev Tamatar Sabzi',
        category: 'Kathiyawadi',
        rating: 4.3,
        price:100,
        img:'https://i.pinimg.com/564x/c5/09/71/c5097142548f97e3f6b55126f3f84da6.jpg',
        quantity:1
    },
    {
        id : 2,
        name: 'Methi Thepla',
        category: 'Kathiyawadi',
        rating: 4.0,
        price: 50,
        img: 'https://i.pinimg.com/564x/a4/e3/61/a4e3615486afa6f4166c2d31b603fe31.jpg',
        quantity:1
    },
    {
        id : 3,
        name: 'Jalebi & Fafda',
        category: 'Kathiyawadi',
        rating: 4.1,
        price: 150,
        img: 'https://i.pinimg.com/564x/91/47/10/914710ebfc4ab5de6ecc763be5bffa0a.jpg',
        quantity:1
    },
    {
        id : 4,
        name: 'Bajra Roti',
        category: 'Kathiyawadi',
        rating: 3.9,
        price: 30,
        img: 'https://i.pinimg.com/564x/7b/0b/ee/7b0bee4beb7ebf198879c6db0b6ff631.jpg',
        quantity:1
    },
    {
        id : 5,
        name: 'Khaman-Dhokla',
        category: 'Kathiyawadi',
        rating: 4.5,
        price: 60,
        img:'https://i.pinimg.com/474x/81/7e/7d/817e7dd5fe5c623f5e55621d0c9dbb38.jpg',
        quantity:1
    },
    {
        id : 6,
        name: 'Gujarati Handvo',
        category: 'Kathiyawadi',
        rating: 4.3,
        price: 150,
        img:'https://i.pinimg.com/564x/71/96/09/71960989243b8c8f61ceeb29bd5d1cd5.jpg',
        quantity:1
    },
    {
        id : 7,
        name:  'Gujarati Khandvi',
        category: 'Kathiyawadi',
        rating: 4.2,
        price: 100,
        img:'https://i.pinimg.com/564x/38/17/3d/38173d8a4f97182bc02ab3b2f892d8a2.jpg',
        quantity:1
    },
    {
        id : 8,
        name: 'Methi Ke Gote',
        category: 'Kathiyawadi',
        rating: 4.3,
        price: 200,
        img:'https://i.pinimg.com/564x/58/52/45/5852452bff674f36ffce3c5a4eb22678.jpg',
        quantity:1
    },
    {
        id : 9,
        name: 'Gujiya',
        category: 'Kathiyawadi',
        rating: 4.3,
        price:  150,
        img: 'https://i.pinimg.com/564x/cd/5a/61/cd5a61577e5dadf1571a41e05983169a.jpg',
        quantity:1
    },
    {
        id : 10,
        name: 'Surti Locho',
        category: 'Kathiyawadi',
        rating: 4.1,
        price: 80,
        img:'https://i.pinimg.com/564x/82/44/e5/8244e56a500ac5319b8adba7916040f4.jpg',
        quantity:1
    },
    {
        id : 11,
        name: 'Sabudana Vada',
        category: 'Kathiyawadi',
        rating: 4.2,
        price: 100,
        img:'https://i.pinimg.com/564x/c5/61/71/c561714920399b0ebd45144bd6e570bc.jpg',
        quantity:1
    },
    {
        id : 12,
        name: 'Dal Dhookli',
        category: 'Kathiyawadi',
        rating: 4.2,
        price: 150,
        img: 'https://i.pinimg.com/564x/11/34/b2/1134b2c8245f95f7d731411db4c2d4ed.jpg',
        quantity:1
    },
    {
        id : 13,
        name: 'Chhole Bhture',
        category: 'Punjabi',
        rating:3.9,
        price: 110,
        img:'https://i.pinimg.com/564x/19/2d/72/192d722849ed087bf9442e978544f954.jpg',
        quantity:1
    },
    {
        id : 14,
        name: 'Carry With Rice',
        category: 'Punjabi',
        rating: 4.1,
        price: 150,
        img: 'https://i.pinimg.com/564x/3e/d6/35/3ed635c0446a51738c65864cf66a4dca.jpg',
        quantity:1
    },
    {
        id : 15,
        name: 'Kadhi Pakora',
        category: 'Punjabi',
        rating: 4.0,
        price: 150,
        img: 'https://i.pinimg.com/564x/9d/74/7e/9d747e9228edfb0c14b0976182f5a1c5.jpg',
        quantity:1
    },
    {
        id : 16,
        name: 'Aloo Paratha',
        category: 'Punjabi',
        rating: 3.9,
        price: 120,
        img: 'https://i.pinimg.com/564x/12/56/37/125637335754342fa5addfd6a101002f.jpg',
        quantity:1
    },
    {
        id : 17,
        name: 'Matar Paneer',
        category: 'Punjabi',
        rating: 4.5,
        price: 100,
        img: 'https://i.pinimg.com/564x/a8/41/cc/a841cc62821a24417855c2ae3a23cdb9.jpg',
        quantity:1
    },
    {
        id : 18,
        name: 'Kaju Curry',
        category: 'Punjabi',
        rating: 4.5,
        price: 150,
        img: 'https://i.pinimg.com/564x/6b/22/09/6b2209263003a342f862377d38a81ed7.jpg',
        quantity:1
    },
    {
        id : 19,
        name: 'Kaju Masala',
        category: 'Punjabi',
        rating: 4.6,
        price: 200,
        img:'https://i.pinimg.com/564x/54/02/1a/54021a2d92908620a902dc3bde71878b.jpg',
        quantity:1
    },
    {
        id : 20,
        name: 'Lachha Paratha',
        category: 'Punjabi',
        rating: 4.9,
        price: 150,
        img:'https://i.pinimg.com/564x/47/89/7f/47897f8a800f5ad65fe82b93514c35fd.jpg',
        quantity:1
    },
    {
        id : 21,
        name: 'Tanduri Roti',
        category: 'Punjabi',
        rating: 4.4,
        price: 90,
        img: 'https://i.pinimg.com/564x/cc/ff/92/ccff929587b3148c28f3d835713e60ed.jpg',
        quantity:1
    },
    {
        id : 22,
        name: 'Palak Paneer',
        category: 'Paneer',
        rating: 4.2,
        price: 100,
        img: 'https://i.pinimg.com/564x/de/4d/21/de4d215b325b6c233830846f35a2d3ba.jpg',
        quantity:1
    },
    {
        id : 23,
        name: 'Paneer Tikka',
        category: 'Paneer',
        rating: 4.2,
        price: 200,
        img:'https://i.pinimg.com/564x/d1/ea/9f/d1ea9f65c0385370091bd2faaeb1fccb.jpg',
        quantity:1
    },
    {
        id : 24,
        name: 'Paneer Bhurji',
        category: 'Paneer',
        rating: 4.3,
        price: 100,
        img:'https://i.pinimg.com/564x/58/77/a1/5877a1eddd2c8e5149b429304f17c9bd.jpg',
        quantity:1
    },
    {
        id : 25,
        name: 'Kadai Paneer',
        category: 'Paneer',
        rating: 4.5,
        price: 150,
        img:'https://i.pinimg.com/564x/9b/ab/81/9bab81625626ffcf36f8f8387a056d9c.jpg',
        quantity:1
    },
    {
        id : 26,
        name: 'Chilli Paneer',
        category: 'Paneer',
        rating: 4.7,
        price: 150,
        img: 'https://i.pinimg.com/564x/2e/f7/2c/2ef72c26032a689169bf57b7c95a11dd.jpg',
        quantity:1
    },
    {
        id : 27,
        name: 'Paneer Kathi Rolls', 
        category: 'Paneer',
        rating: 4.9,
        price: 120,
        img:'https://i.pinimg.com/564x/b9/cb/8e/b9cb8ee205d5c14b169fa0fe39975f2b.jpg',
        quantity:1
    },
    {
        id : 28,
        name: 'Vegetable Carry',
        category: 'Vegetable',
        rating: 3.9,
        price: 100,
        img: 'https://i.pinimg.com/564x/7b/91/27/7b9127b5e959f57d16cd8c2b4e72cce9.jpg',
        quantity:1
    },
    {
        id : 29,
        name: 'Aloo Methi Sabzi',
        category: 'Vegetable',
        rating:4.1,
        price:70,
        img:'https://i.pinimg.com/564x/f0/89/6a/f0896a008e653478b85643a6d81c1236.jpg',
        quantity:1
    },
    {
        id : 30,
        name: 'Guvar ki sabzi',
        category: 'Vegetable',
        rating: 4.4,
        price: 50,
        img: 'https://i.pinimg.com/564x/d8/11/ee/d811eef314d062818654881c64468c29.jpg',
        quantity:1
    },
    {
        id : 31,
        name: 'Beans Ki Sabzi',
        category: 'Vegetable',
        rating: 4.8,
        price:70,
        img: 'https://i.pinimg.com/564x/e8/ec/44/e8ec44767d6de9d436849999524ecedb.jpg',
        quantity:1
    },{
        id : 32,
        name: 'Bhindi Masala',
        category: 'Vegetable',
        rating: 4.6,
        price: 80,
        img: 'https://i.pinimg.com/564x/63/45/f0/6345f04754a816e534842e682bd70a42.jpg',
        quantity:1
    },
    {
        id : 33,
        name: 'White Bean Carry',
        category: 'Vegetable',
        rating: 4.7,
        price: 50,
        img: 'https://i.pinimg.com/564x/6f/34/cf/6f34cfa9e59645a17878f081f0dd347a.jpg',
        quantity:1
    },
    {
        id : 34,
        name: 'Corn Rajputana',
        category: 'Vegetable',
        rating: 3.5,
        price: 100,
        img: 'https://i.pinimg.com/564x/ed/57/a8/ed57a87789faf95b9a94701b63c45f2c.jpg',
        quantity:1
    },
    {
        id : 35,
        name: 'Gobi ki Sabzi',
        category: 'Vegetable',
        rating: 3.5,
        price: 50,
        img:'https://i.pinimg.com/474x/5a/74/29/5a74297ce8ac351d834263fe9c48ebc2.jpg',
        quantity:1
    },{
        id : 36,
        name: 'Kaju-Makhana',
        category: 'Vegetable',
        rating: 4.5,
        price: 70,
        img:'https://i.pinimg.com/564x/20/9c/e2/209ce28332ae16b95bc45a437dea71f3.jpg',
        quantity:1
    },
    {
        id : 37,
        name: 'Veg Tikka Masala',
        category: 'Vegetable',
        rating: 4.4,
        price: 150,
        img: 'https://i.pinimg.com/474x/c7/b8/e3/c7b8e322c6d174b208f077ef5f15d9de.jpg',
        quantity:1
    },
    {
        id : 38,
        name: 'Jeera Aloo',
        category: 'Vegetable',
        rating: 4.3,
        price: 50,
        img: 'https://i.pinimg.com/564x/9c/b4/7b/9cb47b71924bb932a45d2b2e5d311117.jpg',
        quantity:1
    },
    {
        id : 39,
        name: 'Bnagan Ka Bhartha',
        category: 'Vegetable',
        rating: 4.6,
        price: 90,
        img: 'https://i.pinimg.com/564x/51/1c/95/511c957996a4d7a7111728382b4e92e1.jpg',
        quantity:1
    },
    {
        id : 40,
        name: 'Chinese Noodles',
        category: 'Chinese',
        rating:4.3,
        price: 150,
        img: 'https://i.pinimg.com/564x/5f/49/bc/5f49bc970b094fb5b3094b16c87851de.jpg',
        quantity:1
    },
    {
        id : 41,
        name: 'Veg Manchurian',
        category: 'Chinese',
        rating: 4.5,
        price: 120,
        img: 'https://i.pinimg.com/564x/f0/00/59/f00059542e3e13a754275d47d4fb93e9.jpg',
        quantity:1
    },
    {
        id : 42,
        name: 'Veg Stir Fry',
        category: 'Chinese',
        rating: 4.3,
        price: 100,
        img: 'https://i.pinimg.com/564x/af/e0/b0/afe0b0732f41eaf93c37a27c224c434d.jpg',
        quantity:1
    },
    {
        id : 43,
        name: 'Momos',
        category: 'Chinese',
        rating: 4.4,
        price: 130,
        img: 'https://i.pinimg.com/564x/59/26/e4/5926e47e1d0aaa10e88fcf592e78501f.jpg',
        quantity:1
    },
    {
        id : 44,
        name: 'Veg Spring Roll',
        category: 'Chinese',
        rating:4.3,
        price: 100,
        img: 'https://i.pinimg.com/564x/64/33/60/643360a11dba6df338db35e51a64f670.jpg',
        quantity:1
    },
    {
        id : 45,
        name: 'Udon Soup',
        category: 'Chinese',
        rating: 4.5,
        price: 50,
        img: 'https://i.pinimg.com/564x/b2/40/8d/b2408ddd6309508216a8d0e6f7c711de.jpg',
        quantity:1
    },
    {
        id : 46,
        name: 'Salt & Pepper Chips',
        category: 'Chinese',
        rating: 4.4,
        price: 150,
        img: 'https://i.pinimg.com/564x/26/b4/a2/26b4a2a01eaa5e77cc1a158454ec1c2e.jpg',
        quantity:1
    },
    {
        id : 47,
        name: 'Chinese Samosa',
        category: 'Chinese',
        rating: 4.9,
        price: 100,
        img:'https://i.pinimg.com/564x/c1/63/06/c1630611d504d61a5b4d83055f2ec162.jpg',
        quantity:1
    },
    {
        id : 48,
        name: 'Hakka Noodles',
        category: 'Chinese',
        rating: 4.3,
        price: 150,
        img:'https://i.pinimg.com/564x/81/2c/8a/812c8a0a35835859aa6c8c9a05519e2c.jpg',
        quantity:1
    },
    {
        id : 49,
        name: 'Idli Sambhar',
        category: 'South Indian',
        rating: 4.3,
        price: 40,
        img: 'https://i.pinimg.com/564x/25/11/ae/2511aea623ba7893f6401be65b835f7b.jpg',
        quantity:1
    },
    {
        id : 50,
        name: 'Uthappam',
        category: 'South Indian',
        rating: 3.4,
        price: 100,
        img:'https://i.pinimg.com/564x/db/18/24/db182424f63e7b4bc261baa67f1a61cf.jpg',
        quantity:1
    },
    {
        id : 51,
        name: 'Dosa',
        category: 'South Indian',
        rating: 4.2,
        price: 120,
        img:'https://i.pinimg.com/564x/7f/6d/3e/7f6d3ebdca842e61864b698a277c5418.jpg',
        quantity:1
    },
    {
        id : 52,
        name: 'Dal Vada',
        category: 'South Indian',
        rating: 4.6,
        price: 40,
        img: 'https://i.pinimg.com/564x/93/e2/7d/93e27d33644bc6ea36356103654cdf63.jpg',
        quantity:1
    },
    {
        id : 53,
        name: 'Ved Idli',
        category: 'South Indian',
        rating: 4.5,
        price: 80,
        img:'https://i.pinimg.com/564x/59/93/83/5993833206b8860b893fd64c39b4aa84.jpg',
        quantity:1
    },
    {
        id : 54,
        name: 'Rava Upma',
        category: 'South Indian',
        rating: 4.6,
        price: 110,
        img:'https://i.pinimg.com/564x/1f/c3/20/1fc3206bd71b51cd9a41e1670add2d38.jpg',
        quantity:1
    },
    {
        id : 55,
        name: 'Coconut Chatni',
        category: 'South Indian',
        rating: 4.2,
        price:30,
        img: 'https://i.pinimg.com/564x/de/9b/ef/de9bef52434fa2c195f739b762d65a0d.jpg',
        quantity:1
    },

    {
        id : 56,
        name: 'Kerala Putta',
        category: 'South Indian',
        rating: 4.1,
        price: 200,
        img:'https://i.pinimg.com/564x/83/75/1b/83751becd8e942023ac5479cf8915557.jpg',
        quantity:1
    },{
        id : 57,
        name: 'Rasgulla',
        category: 'South Indian',
        rating: 3.9,
        price:150,
        img: 'https://i.pinimg.com/564x/03/55/5a/03555afe31b7ca2b9db1dbf0f45a02e6.jpg',
        quantity:1
    },
    {
        id : 58,
        name: 'Masala Vada',
        category: 'South Indian',
        rating:4.0,
        price:150,
        img:'https://i.pinimg.com/564x/6f/e3/9f/6fe39fdc0b5b0514c9ea4cc56f8e35ff.jpg',
        quantity:1
    },

    {
        id : 59,
        name: 'punugulu',
        category: 'South Indian',
        rating:4.5,
        price: 150,
        img:'https://i.pinimg.com/564x/0c/66/39/0c6639151e840de37c7567ecaa85602c.jpg',
        quantity:1
    },
    {
        id : 60,
        name: 'Sabudala Vada',
        category: 'South Indian',
        rating: 4.4,
        price: 110,
        img:'https://i.pinimg.com/564x/33/60/16/336016ebaf1d7b40615642505e1043f5.jpg',
        quantity:1
    }
]

export{foodItem};