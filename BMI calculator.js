var Weight = prompt("Please, Enter your Weight in kilogram: ")
var hight = prompt("Please, Enter your hight in meter: ")

// BMI function calculator

function calculate_bmi(Weight, hight)
{
    BMI_result = Weight / (hight*hight)
    return BMI_result
}

// BMI

var BMI = calculate_bmi(Weight, hight)

// function takes the BMI && returns the description

function interpret_bmi(bmi)
{
    if (bmi < 18.5)
    {
        descrition = "You are Under Weight!"
    }
    else if (bmi >= 18.5 && bmi < 25)
    {
        descrition = "You are Normal Weight!"
    }
    else if (bmi >= 25 && bmi < 30)
    {
        descrition = "You are Over Weight"
    }
    else
    {
        descrition = "You are Obesity"
    }
    return descrition
}

// print interpret_bmi function

alert(interpret_bmi(BMI))