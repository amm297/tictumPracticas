import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {User} from "../../models/user";
import {Users} from "../../providers/users";

import {PasswordValidator} from  './passwordValidator';
import {DniValidator} from  './dniValidator';
import {Roles} from "../../providers/roles";

@IonicPage()
@Component({
  selector: 'page-userform',
  templateUrl: 'userform.html',
})
export class UserformPage {

  user: User = new User();
  roles: any;
  confirmpassword: string;
  userForm;
  btnValue : string = "Registrar usuario";
  edit : boolean = false;
countriesInitial;
searchCountryString = '';
  countries=["Bangladesh",
 "Belgium",
 "Burkina Faso",
 "Bulgaria",
 "Bosnia and Herzegovina",
 "Barbados",
 "Wallis and Futuna",
 "Saint Barthelemy",
 "Bermuda",
 "Brunei",
 "Bolivia", "Bahrain",
 "Burundi",
 "Benin",
 "Bhutan",
 "Jamaica",
 "Bouvet Island",
 "Botswana",
 "Samoa",
 "Bonaire, Saint Eustatius and Saba ",
 "Brazil",
 "Bahamas",
 "Jersey",
 "Belarus",
 "Belize",
 "Russia",
 "Rwanda",
 "Serbia",
 "East Timor",
 "Reunion",
 "Turkmenistan",
 "Tajikistan",
 "Romania",
 "Tokelau",
 "Guinea-Bissau",
 "Guam",
 "Guatemala",
 "South Georgia and the South Sandwich Islands",
 "Greece",
 "Equatorial Guinea",
 "Guadeloupe",
 "Japan",
 "Guyana",
 "Guernsey",
 "French Guiana",
  "Georgia", 
  "Grenada",
 "United Kingdom",
 "Gabon",
"El Salvador",
"Guinea",
"Gambia",
 "Greenland",
 "Gibraltar",
 "Ghana",
 "Oman",
 "Tunisia",
 "Jordan",
 "Croatia",
 "Haiti",
 "Hungary",
 "Hong Kong",
 "Honduras",
 "Heard Island and McDonald Islands",
 "Venezuela",
 "Puerto Rico",
 "Palestinian Territory",
 "Palau",
 "Portugal",
 "Svalbard and Jan Mayen",
 "Paraguay",
 "Iraq", "Panama",
 "French Polynesia",
 "Papua New Guinea",
 "Peru",
 "Pakistan",
  "Philippines", "Pitcairn",
 "Poland",
 "Saint Pierre and Miquelon",
 "Zambia",
 "Western Sahara",
 "Estonia",
 "Egypt",
 "South Africa",
 "Ecuador",
 "Italy",
 "Vietnam",
 "Solomon Islands",
 "Ethiopia",
 "Somalia",
 "Zimbabwe",
 "Saudi Arabia",
 "Spain",
 "Eritrea",
 "Montenegro",
 "Moldova",
 "Madagascar",
 "Saint Martin",
 "Morocco",
 "Monaco",
 "Uzbekistan",
 "Myanmar",
 "Mali",
"Macao",
 "Mongolia",
 "Marshall Islands",
 "Macedonia","Mauritius",
"Malta",
 "Malawi",
"Maldives",
"Martinique",
 "Northern Mariana Islands",
 "Montserrat",
 "Mauritania",
 "Isle of Man",
 "Uganda",
 "Tanzania",
 "Malaysia",
 "Mexico",
 "Israel",
 "France",
 "British Indian Ocean Territory",
 "Saint Helena",
 "Finland",
"Fiji",
 "Falkland Islands",
 "Micronesia",
 "Faroe Islands",
 "Nicaragua",
 "Netherlands",
  "Norway",
"Namibia",
 "Vanuatu",
 "New Caledonia",
 "Niger",
 "Norfolk Island",
 "Nigeria",
 "New Zealand",
 "Nepal",
 "Nauru",
 "Niue",
 "Cook Islands",
 "Kosovo",
 "Ivory Coast",
 "Switzerland",
 "Colombia",
 "China",
 "Cameroon",
 "Chile",
 "Cocos Islands",
 "Canada",
 "Republic of the Congo",
 "Central African Republic",
 "Democratic Republic of the Congo",
 "Czech Republic",
 "Cyprus",
 "Christmas Island",
 "Costa Rica",
 "Curacao",
 "Cape Verde",
 "Cuba",
 "Swaziland",
 "Syria",
 "Sint Maarten",
 "Kyrgyzstan",
 "Kenya",
 "South Sudan",
 "Suriname",
 "Kiribati",
 "Cambodia",
 "Saint Kitts and Nevis",
 "Comoros",
 "Sao Tome and Principe",
 "Slovakia",
 "South Korea",
 "Slovenia",
 "North Korea",
 "Kuwait",
 "Senegal",
 "San Marino",
 "Sierra Leone",
 "Seychelles",
 "Kazakhstan",
 "Cayman Islands",
 "Singapore",
 "Sweden",
 "Sudan",
 "Dominican Republic",
 "Dominica",
 "Djibouti",
 "Denmark",
 "British Virgin Islands",
 "Germany",
 "Yemen",
 "Algeria",
 "United States",
 "Uruguay",
 "Mayotte",
  "United States Minor Outlying Islands",
 "Lebanon",
 "Saint Lucia",
 "Laos",
  "Tuvalu",
 "Taiwan",
  "Trinidad and Tobago",
 "Turkey",
 "Sri Lanka",
 "Liechtenstein",
 "Latvia",
 "Tonga",
 "Lithuania",
 "Luxembourg",
 "Liberia",
 "Lesotho",
 "Thailand",
 "French Southern Territories",
 "Togo",
 "Chad",
  "Turks and Caicos Islands",
 "Libya",
  "Vatican",
 "Saint Vincent and the Grenadines",
 "United Arab Emirates",
 "Andorra",
 "Antigua and Barbuda",
 "Afghanistan",
 "Anguilla",
 "U.S. Virgin Islands",
 "Iceland",
 "Iran",
 "Armenia",
 "Albania",
 "Angola",
 "Antarctica",
 "American Samoa",
 "Argentina",
 "Australia",
 "Austria",
 "Aruba",
 "India",
 "Aland Islands",
 "Azerbaijan",
 "Ireland",
 "Indonesia",
 "Ukraine",
 "Qatar",
 "Mozambique"
]

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private usersService: Users,
              private rolesService: Roles,
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController) {

    this.countries.sort();
    
    if (this.navParams.get('user')) this.user = this.navParams.get('user');
    else 
      {this.user.daysh=30;
      this.user.daysp=6;}

    if (this.navParams.get('user')) {
        this.user = this.navParams.get('user');
        this.btnValue = "Editar usuario";
        this.edit = true;
    }

    this.userForm = formBuilder.group({
      name: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      dni: ['', Validators.compose([Validators.required, DniValidator.isValid, DniValidator.hasValidFormat])],
      address: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.compose([Validators.minLength(8), Validators.pattern('[0-9()+-]*'), Validators.required])],
      email: ['', Validators.compose([Validators.minLength(8), Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      confirmpassword: ['', PasswordValidator.isEqual],
      role: ['', Validators.required],
      country2:['',Validators.required]
    });
  }

  ionViewWillLoad() {
    this.rolesService.getAllRoles().then(data => {
      this.roles = data;
    });
  }

  registerUser() {
    if (this.userForm.valid) {
      if(this.edit){
        this.usersService.modifyUser(this.user).then(data =>{
          if(!data.hasOwnProperty('errmsg')) this.navCtrl.pop();
        });
      }else{
        this.usersService.registerUser(this.user).then((data) => {
          if (data.hasOwnProperty('errmsg')) {
            let msg = '';
            if (data['errmsg'].indexOf('dni') > 0) msg = "DNI ya en uso: " + this.user.dni;
            else  msg = "Email ya en uso: " + this.user.email;

            let alert = this.alertCtrl.create({
              title: 'Oops!',
              subTitle: msg,
              buttons: ['Ok']
            });
            alert.present();
          } else {
            this.navCtrl.pop();
          }
        });
      }

    } else {
      console.log("Formulario incorrecto!");
    }
  }

  searchCountry(searchbar) {
        // reset countries list with initial call
        this.countries = this.countriesInitial;
        // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
        return;
    }

    this.countries = this.countries.filter((v) => {
        if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
        }
        return false;
    })
}




}
