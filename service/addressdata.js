function getCateList(user_id){
  if(user_id==1002)
  {
     return[

              { 'id':1,
              'num':1,
                'name': 'Mr Wang',
                'phone': '13811111111',
                'areaCode': '010',
                'landLine': '64627856',
                'provinceId': 110000,
                'province': 'Guang Dong ',
                'cityId': 110100,
                'city': 'Shenzhen',
                'countyId': 110106,
                'county': 'Futian',
                'add': 'Room 319, building 6, Shangdi 10th Stree',
                'default': false,
                'checked': true
              },

              { 'id':2,
                'num':1,
                'name': 'Mr Li',
                'phone': '13811111111',
                'areaCode': '010',
                'landLine': '64627856',
                'provinceId': 110000,
                'province': 'Guang Dong ',
                'cityId': 110100,
                'city': 'Shenzhen',
                'countyId': 110106,
                'county': 'Futian',
                'add': 'Room 319, building 6, Shangdi 10th Stree',
                'default': true,
                'checked': true
              },

              { 'id':3,
              'num':1,
                'name': 'Mr Li',
                'phone': '13811111111',
                'areaCode': '010',
                'landLine': '64627856',
                'provinceId': 110000,
                'province': 'Guang Dong ',
                'cityId': 110100,
                'city': 'Shenzhen',
                'countyId': 110106,
                'county': 'Futian',
                'add': 'Room 319, building 6, Shangdi 10th Stree',
                'default': false,
                'checked': true
              },

              { 'id':4,
              'num':1,
                'name': 'Mr Li',
                'phone': '13811111111',
                'areaCode': '010',
                'landLine': '64627856',
                'provinceId': 110000,
                'province': 'Guang Dong ',
                'cityId': 110100,
                'city': 'Shenzhen',
                'countyId': 110106,
                'county': 'Futian',
                'add': 'Room 319, building 6, Shangdi 10th Stree',
                'default': false,
                'checked': true
              }
              
          ]
  }
 
}

module.exports = getCateList  

