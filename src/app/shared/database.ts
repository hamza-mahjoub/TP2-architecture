import { User } from "./model/user.model"
import { ROLE, STATUS } from "./sharedEnums"

export const USERS: User[] = [
  new User(1, "12345670", "12345555", "123456", "sami", "lahbib", "sami@gamil.com", new Date("10/02/1999"), "tunis",
   [{ date: new Date("05/11/2021"), location: { governorate: 'Tunis', vaccinationCenter: 'menzeh' }, vaccinator: 'salma hafsi', status: STATUS.Done },
   { date: new Date("10/03/2022"), location: { governorate: 'Tunis', vaccinationCenter: 'menzeh' }, vaccinator: 'saleh mhimed', status: STATUS.Pending }]),
  new User(2, "12345671", "12345556", "123456", "youssef", "lahbib", "youssef@gamil.com", new Date("5/16/2005"), "sfax", [
    { date: new Date("06/05/2021"), location: { governorate: 'Bizerte', vaccinationCenter: 'sidi salem' }, vaccinator: 'soumaia soussi', status: STATUS.Done },
  { date: new Date("10/11/2022"), location: { governorate: 'Bizerte', vaccinationCenter: 'menzeh' }, vaccinator: 'mohamed soussi', status: STATUS.Done }]),
  new User(3, "12345672", "12345557", "123456", "youness", "lahbib", "youness@gamil.com", new Date("5/12/1960"), "bizerte", []),
  new User(4, "12345673", "12345557", "123456", "admin", "admin", "admin@gamil.com", new Date("1/1/2022"), "admintown", [],ROLE.Admin)
]

export const REGISTERED = [
  {
    "name": "Tunis",
    "value": "835735"
  },
  {
    "name": "Sfax",
    "value": '714138'
  },
  {
    "name": "Nabeul",
    "value": "566346"
  },
  {
    "name": "Ben Arous",
    "value": "521619"
  },
  {
    "name": "Sousse",
    "value": "513909"
  },
  {
    "name": "Ariana",
    "value": "445737"
  },
  {
    "name": "Bizerte",
    "value": "427264"
  },
  {
    "name": "Monastir",
    "value": "394599"
  },
  {
    "name": "Kairouan",
    "value": "321945"
  },
  {
    "name": "Kairouan",
    "value": "321945"
  },
  {
    "name": "Mannouba",
    "value": "302320"
  },
  {
    "name": "Kasserine",
    "value": "299662",
  },
  {
    "name": "Jendouba",
    "value": "273227",
  },
  {
    "name": "Mahdia",
    "value": "263262",
  }, {
    "name": "Sidi Bouzid",
    "value": "260195",
  },
  {
    "name": "Gafsa",
    "value": "251965",
  }, {
    "name": "Gabès",
    "value": "245181",
  }, {
    "name": "Béja",
    "value": "221406",
  }, {
    "name": "Le Kef",
    "value": "172726",
  }, {
    "name": "Médenine",
    "value": "170881",
  }, {
    "name": "Siliana",
    "value": "146257",
  }, {
    "name": "Zaghouan",
    "value": "139328",
  }, {
    "name": "Médenine-Djerba",
    "value": "114340",
  }, {
    "name": "Kebili",
    "value": "103298",
  }, {
    "name": "Tozeur",
    "value": "81250",
  }, {
    "name": "Tataouine",
    "value": "71368",
  }

]

export const multi1 = [
  {
    "name": "Tunis",
    "series": [
      {
        "name": "registered",
        "value": "835735",
      },
      {
        "name": "summoned",
        "value": "833292",
      },
      {
        "name": "received At Least One Dose",
        "value": "774349",
      },
      {
        "name": "have Completed Vaccination",
        "value": "700055"
      },
    ]
  },
  {
    "name": "Sfax",
    "series": [
      {
        "name": "registered",
        "value": "714138",
      },
      {
        "name": "summoned",
        "value": "712525",
      },
      {
        "name": "received At Least One Dose",
        "value": "654201",
      },
      {
        "name": "have Completed Vaccination",
        "value": "591747"
      },
    ]
  },
  {
    "name": "Nabeul",
    "series": [
      {
        "name": "registered",
        "value": "566346",
      },
      {
        "name": "summoned",
        "value": "564555",
      },
      {
        "name": "received At Least One Dose",
        "value": "510241",
      },
      {
        "name": "have Completed Vaccination",
        "value": "442429"
      },
    ]
  },
  {
    "name": "Ben Arous",
    "series": [
      {
        "name": "registered",
        "value": "521619",
      },
      {
        "name": "summoned",
        "value": "520257",
      },
      {
        "name": "received At Least One Dose",
        "value": "488196",
      },
      {
        "name": "have Completed Vaccination",
        "value": "443151"
      },
    ]
  },
  {
    "name": "Sousse",
    "series": [
      {
        "name": "registered",
        "value": "513909",
      },
      {
        "name": "summoned",
        "value": "513909",
      },
      {
        "name": "received At Least One Dose",
        "value": "475921",
      },
      {
        "name": "have Completed Vaccination",
        "value": "433223"
      },
    ]
  },
  {
    "name": "Ariana",
    "series": [
      {
        "name": "registered",
        "value": "445737",
      },
      {
        "name": "summoned",
        "value": "444395",
      },
      {
        "name": "received At Least One Dose",
        "value": "414889",
      },
      {
        "name": "have Completed Vaccination",
        "value": "369538"
      },
    ]
  },
  {
    "name": "Bizerte",
    "series": [
      {
        "name": "registered",
        "value": "427264",
      },
      {
        "name": "summoned",
        "value": "426507",
      },
      {
        "name": "received At Least One Dose",
        "value": "386851",
      },
      {
        "name": "have Completed Vaccination",
        "value": "340145"
      },
    ]
  },
  {
    "name": "Monastir",
    "series": [
      {
        "name": "registered",
        "value": "394599",
      },
      {
        "name": "summoned",
        "value": "393819",
      },
      {
        "name": "received At Least One Dose",
        "value": "365210",
      },
      {
        "name": "have Completed Vaccination",
        "value": "325876"
      },
    ]
  },
]

export const multi2 = [

  {
    "name": "Kairouan",
    "series": [
      {
        "name": "registered",
        "value": "321945",
      },
      {
        "name": "summoned",
        "value": "321436",
      },
      {
        "name": "received At Least One Dose",
        "value": "276571",
      },
      {
        "name": "have Completed Vaccination",
        "value": "224298"
      },
    ]
  },
  {
    "name": "Mannouba",
    "series": [
      {
        "name": "registered",
        "value": "302320",
      },
      {
        "name": "summoned",
        "value": "301664",
      },
      {
        "name": "received At Least One Dose",
        "value": "278534",
      },
      {
        "name": "have Completed Vaccination",
        "value": "241293"
      },
    ]
  },
  {
    "name": "Kasserine",
    "series": [
      {
        "name": "registered",
        "value": "299662",
      },
      {
        "name": "summoned",
        "value": "299385",
      },
      {
        "name": "received At Least One Dose",
        "value": "267722",
      },
      {
        "name": "have Completed Vaccination",
        "value": "218228"
      },
    ]
  },
  {
    "name": "Jendouba",
    "series": [
      {
        "name": "registered",
        "value": "273227",
      },
      {
        "name": "summoned",
        "value": "272782",
      },
      {
        "name": "received At Least One Dose",
        "value": "245466",
      },
      {
        "name": "have Completed Vaccination",
        "value": "211199"
      },
    ]
  },
  {
    "name": "Mahdia",
    "series": [
      {
        "name": "registered",
        "value": "263262",
      },
      {
        "name": "summoned",
        "value": "262860",
      },
      {
        "name": "received At Least One Dose",
        "value": "235813",
      },
      {
        "name": "have Completed Vaccination",
        "value": "206425"
      },
    ]
  },
  {
    "name": "Sidi Bouzid",
    "series": [
      {
        "name": "registered",
        "value": "260195",
      },
      {
        "name": "summoned",
        "value": "259671",
      },
      {
        "name": "received At Least One Dose",
        "value": "218132",
      },
      {
        "name": "have Completed Vaccination",
        "value": "189274"
      },
    ]
  },
  {
    "name": "Gafsa",
    "series": [
      {
        "name": "registered",
        "value": "251965",
      },
      {
        "name": "summoned",
        "value": "251592",
      },
      {
        "name": "received At Least One Dose",
        "value": "230864",
      },
      {
        "name": "have Completed Vaccination",
        "value": "209076"
      },
    ]
  },
  {
    "name": "Gabès",
    "series": [
      {
        "name": "registered",
        "value": "245181",
      },
      {
        "name": "summoned",
        "value": "244845",
      },
      {
        "name": "received At Least One Dose",
        "value": "225342",
      },
      {
        "name": "have Completed Vaccination",
        "value": "200236"
      },
    ]
  },
]

export const multi3 = [


  {
    "name": "Béja",
    "series": [
      {
        "name": "registered",
        "value": "221406",
      },
      {
        "name": "summoned",
        "value": "221176",
      },
      {
        "name": "received At Least One Dose",
        "value": "204896",
      },
      {
        "name": "have Completed Vaccination",
        "value": "180728"
      },
    ]
  },
  {
    "name": "Le Kef",
    "series": [
      {
        "name": "registered",
        "value": "172726",
      },
      {
        "name": "summoned",
        "value": "172510",
      },
      {
        "name": "received At Least One Dose",
        "value": "160229",
      },
      {
        "name": "have Completed Vaccination",
        "value": "140087"
      },
    ]
  },
  {
    "name": "Médenine",
    "series": [
      {
        "name": "registered",
        "value": "170881",
      },
      {
        "name": "summoned",
        "value": "170302",
      },
      {
        "name": "received At Least One Dose",
        "value": "148452",
      },
      {
        "name": "have Completed Vaccination",
        "value": "134141"
      },
    ]
  },
  {
    "name": "Siliana",
    "series": [
      {
        "name": "registered",
        "value": "146257",
      },
      {
        "name": "summoned",
        "value": "146107",
      },
      {
        "name": "received At Least One Dose",
        "value": "132732",
      },
      {
        "name": "have Completed Vaccination",
        "value": "110742"
      },
    ]
  },
  {
    "name": "Zaghouan",
    "series": [
      {
        "name": "registered",
        "value": "139328",
      },
      {
        "name": "summoned",
        "value": "139181",
      },
      {
        "name": "received At Least One Dose",
        "value": "128398",
      },
      {
        "name": "have Completed Vaccination",
        "value": "113884"
      },
    ]
  },
  {
    "name": "Médenine-Djerba",
    "series": [
      {
        "name": "registered",
        "value": "114340",
      },
      {
        "name": "summoned",
        "value": "114055",
      },
      {
        "name": "received At Least One Dose",
        "value": "105888",
      },
      {
        "name": "have Completed Vaccination",
        "value": "97868"
      },
    ]
  },
  {
    "name": "Kebili",
    "series": [
      {
        "name": "registered",
        "value": "103298",
      },
      {
        "name": "summoned",
        "value": "103218",
      },
      {
        "name": "received At Least One Dose",
        "value": "94452",
      },
      {
        "name": "have Completed Vaccination",
        "value": "82092"
      },
    ]
  },
  {
    "name": "Tozeur",
    "series": [
      {
        "name": "registered",
        "value": "81250",
      },
      {
        "name": "summoned",
        "value": "81176",
      },
      {
        "name": "received At Least One Dose",
        "value": "77520",
      },
      {
        "name": "have Completed Vaccination",
        "value": "70837"
      },
    ]
  },
  {
    "name": "Tataouine",
    "series": [
      {
        "name": "registered",
        "value": "71368",
      },
      {
        "name": "summoned",
        "value": "71288",
      },
      {
        "name": "received At Least One Dose",
        "value": "63689",
      },
      {
        "name": "have Completed Vaccination",
        "value": "57488"
      },
    ]
  },
]
