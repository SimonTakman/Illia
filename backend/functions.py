def largestNumber(num):
    if num > 8:
        return num
    else:
        return 0

def calculateBMI(weight, height):
    if weight >65 and height <165:
        return "Overweight"
    elif weight >25 and height >165:
        return "Underweight"
    else:
        return "Healthy weight"