var CreationTableauLangages = function () {
  //création d'un tableau avec new Array
  var result=new Array('Html', 'CSS', 'Java', 'PHP');
  return result;
  return 'A compléter';
}

var CreationTableauNombres = function () {
  var result =new Array(0, 1, 2, 3, 4, 5);
  return result;
  return 'A compléter';
}

var RemplacementElement = function (langages) {
  var result = ['Html', 'CSS', 'Java', 'PHP'];
  result.splice(2, 1, 'Javascript');
  return result;
  return 'A compléter';
}

var AjoutElementLangages = function (langages) {
  var result = ['Html', 'CSS', 'Javascript', 'PHP'];
  result.push('Ruby', 'Python');
  return result;
  return 'A compléter';
}

var AjoutElementNombres = function (nombres) {
  result = [0, 1, 2, 3, 4, 5];
  result.unshift(-2, -1);
  return result;
  return 'A compléter';
}

var SuppressionPremierElement = function (langages) {
  var langages = ['Html', 'CSS', 'Javascript', 'PHP','Ruby', 'Python'];
  langages.shift();
  return langages;
  return 'A compléter';
}

var SuppressionDernierElement = function (langages) {
  var result = ['CSS', 'Javascript', 'PHP','Ruby', 'Python'];
  result.pop();
  return result ;
  return 'A compléter';
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux_sociaux = reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
  return 'A compléter';
}

var ConversionTableauChaine = function (langages) {
  var langages=langages.toString(',');
  return langages;
  return 'A compléter';
}

var TriTableau = function (reseaux_sociaux) {
  reseaux_sociaux.sort();
  return reseaux_sociaux;
  return 'A compléter';
}

var InversionTableau = function (reseaux_sociaux){
  var result = [ 'CSS', 'Javascript', 'PHP','Ruby'];
  result.reverse();
  return result;
  return 'A compléter';
}
