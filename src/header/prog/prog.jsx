import React from 'react'
import Header from '../header.jsx';
import './prog.css';

class Prog extends React.Component {
  render() {
    return(
      <div><Header />
      <div className="exeBloc">
        <div className="contentExe">
          <div className="exeCase">
            <div className="caseImg caseImg1"></div>
            <div className="caseText">
              <p><span>Programmes abdominaux</span></p><p>Programme intensif de 6 semaines pour la musculation des abdominaux. Répartitions d'entraînement, exercices pour les abdos et conseils techniques gratuit. Pour avoir une belle sangle abdominale, un ventre plat et des obliques dessinés, le crunch et le cardio seront vos amis.</p>
            </div>
          </div>
          <div className="exeCase">
            <div className="caseImg caseImg2"></div>
            <div className="caseText">
              <p><span>Programme poids de corps</span></p><p>Voici un programme d'entraînement pour travailler tout le corps sans aucun matériel. Des mollets, en passant par les fessiers jusq'aux épaules, aucun muscle n'est oublié.</p>
            </div>
          </div>
          <div className="exeCase">
            <div className="caseImg caseImg3"></div>
            <div className="caseText">
              <p><span>Programme pour un corps athlétique</span></p><p>Protocole d'entraînement pour choquer vos muscles ayant le but de faire exploser le volume de vos muscles avec une approche scientifique des séances d'entraînements.</p>
            </div>
          </div>
          <div className="exeCase">
            <div className="caseImg caseImg4"></div>
            <div className="caseText">
              <p><span>Programmes dos</span></p><p>Pour se muscler le dos en largeur, une barre fixe sera nécessaire pour effectuer des tractions. Pour faire grossir le dos en épaisseur, vous aurez besoin d'une barre et des haltères pour faire le rowing. Un appareil avec poulie sera utile afin d'effectuer les différents tirages : horizontal, nuque...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default Prog;
