function BMI(mass, height) {
    return mass / (height * height)
}
const MarkMass = 78
const MarkHeight = 1.69
const JohnMass = 92
const JonhHeight = 1.95

var MarkBMI = BMI(MarkMass, MarkHeight)
console.log("Mark's BMI: " + MarkBMI);

var JohnBMI = BMI(JohnMass, JonhHeight)
console.log("John's BMI: " + JohnBMI);

var markHigherBMI = MarkBMI > JohnBMI
console.log(markHigherBMI);