Weight = float(input("Please, Enter Your Weight in kilogram: "))
hight = float(input("Please, Enter Your hight in meter: "))

# BMI function calculator

def calculate_bmi(Weight, hight):
    BMI_result = Weight / (hight*hight)
    return BMI_result


# BMI

BMI = calculate_bmi(Weight, hight)


# function takes the BMI && returns the description
def interpret_bmi(bmi):

    if bmi < 18.5:
        descrition = "You are Under Weight!"
    elif bmi >= 18.5 and bmi < 25:
        descrition = "You are Normal Weight!"
    elif bmi >= 25 and bmi < 30:
        descrition = "You are Over Weight"
    else:
        descrition = "You are Obesity"
    return descrition
# print interpret_bmi function

print(interpret_bmi(BMI))
