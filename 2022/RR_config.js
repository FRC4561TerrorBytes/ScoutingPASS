/* eslint no-unused-vars: "off" */
const configData = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022ncgui",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "qf":"Quarter-Finals<br>",
          "sf":"Semi-Finals<br>",
          "f":"Finals"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Attempted": {
        "code":"au",
        "title": "Upper Cargo Attempted",
        "type":"counter"
      },
      "Upper Cargo Scored": {
        "code":"us",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Attempted": {
        "code":"al",
        "title": "Lower Cargo Attempted",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"ad",
        "title": "Lower Cargo Scored",
        "type":"counter"
      }
    },
    "teleop": {
      "Upper Cargo Attempted": {
        "code":"ta",
        "title": "Upper Cargo Attempted",
        "type":"counter"
      },
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Upper Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Attempted": {
        "code":"tc",
        "title": "Lower Cargo Attempted",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Defense": {
        "code":"de",
        "title": "Defense",
        "type":"text_large",
        "size":15,
        "maxSize":50
      }
    },
    "endgame": {
      "Highest Attempted Climb": {
        "code":"c",
        "title": "Highest Attempted Climb",
        "type":"radio",
        "choices":{
          "4":"Low<br>",
          "6":"Mid<br>",
          "10":"High<br>",
          "15":"Traversal<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Last successful rung": {
        "code":"lsr",
        "title": "Last succcessful rung",
        "type":"radio",
        "choices":{
          "4":"Low<br>",
          "6":"Mid<br>",
          "10":"High<br>",
          "15":"Traversal<br>",
          "x":"Not Successful/Attempted"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      }
    },
    "postmatch": {
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Dunno"
        },
        "defaultValue":"x"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text_large",
        "size":15,
        "maxSize":50
      },
      "Confidence Rating": {
        "code":"cnf",
        "title": "Confidence Rating",
        "type":"radio",
        "choices":{
          "v":"Very Confident<br>",
          "a":"Average<br>",
          "n":"Not Confident"
      },
       "defaultValue":"a"
    }
    }
  }
}`
