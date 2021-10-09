# 8 KYU

def multi_table(number):
    # This program is written by zaydam1000000, original problem at https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
    
    # Declaring what is going to be returned
    returned = ""
    
    # For loop to add all the lines of the multiplication table
    for min in range(11):
        if min != 0:
            multiplied = min * number
            returned = returned + "\n" + str(min) + " * " + str(number) + " = " + str(multiplied)
    
    # Returning string
    return str(returned.strip())