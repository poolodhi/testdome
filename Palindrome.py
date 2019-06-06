def is_palindrome(word):
    if word[::-1].lower() == word.lower(): 
        return True
    return None
    
print(is_palindrome('Deleveled'))
