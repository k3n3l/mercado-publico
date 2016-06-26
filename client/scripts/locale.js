/**
 * https://github.com/angular/bower-angular-i18n/blob/master/angular-locale_es-cl.js
 */
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
  var PLURAL_CATEGORY = {ZERO: "cero", ONE: "uno", TWO: "pocos", FEW: "few", MANY: "many", OTHER: "otros"};
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": [
        "a.m.",
        "p.m."
      ],
      "DAY": [
        "Domingo",
        "Lunes",
        "Martes",
        "Mi\u00e9rcoles",
        "Jueves",
        "Viernes",
        "S\u00e1bado"
      ],
      "ERANAMES": [
        "Antes de Cristo",
        "Despu\u00e9s de Cristo"
      ],
      "ERAS": [
        "a. C.",
        "d. C."
      ],
      "FIRSTDAYOFWEEK": 1,
      "MONTH": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      "SHORTDAY": [
        "dom.",
        "lun.",
        "mar.",
        "mi\u00e9.",
        "jue.",
        "vie.",
        "s\u00e1b."
      ],
      "SHORTMONTH": [
        "ene.",
        "feb.",
        "mar.",
        "abr.",
        "may.",
        "jun.",
        "jul.",
        "ago.",
        "sep.",
        "oct.",
        "nov.",
        "dic."
      ],
      "STANDALONEMONTH": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      "WEEKENDRANGE": [
        5,
        6
      ],
      "fullDate": "EEEE, d 'de' MMMM 'de' y",
      "longDate": "d 'de' MMMM 'de' y",
      "medium": "dd-MM-y HH:mm:ss",
      "mediumDate": "dd-MM-y",
      "mediumTime": "HH:mm:ss",
      "short": "dd-MM-yy HH:mm",
      "shortDate": "dd-MM-yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "$",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
      "PATTERNS": [
        {
          "gSize": 3,
          "lgSize": 3,
          "maxFrac": 3,
          "minFrac": 0,
          "minInt": 1,
          "negPre": "-",
          "negSuf": "",
          "posPre": "",
          "posSuf": ""
        },
        {
          "gSize": 3,
          "lgSize": 3,
          "maxFrac": 2,
          "minFrac": 2,
          "minInt": 1,
          "negPre": "\u00a4-",
          "negSuf": "",
          "posPre": "\u00a4",
          "posSuf": ""
        }
      ]
    },
    "id": "es-cl",
    "localeID": "es_CL",
    "pluralCat": function(n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
  });
}]);
