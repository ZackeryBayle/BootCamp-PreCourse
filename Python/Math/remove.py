html = ['<h1>', 'This is a header']
def remove_first_last(list_to_clean):

    if len(html) > 2:
        _, *content, _ = list_to_clean
        return content
    else:
        print(f'The list is to short to be globbed')
print(remove_first_last(html))