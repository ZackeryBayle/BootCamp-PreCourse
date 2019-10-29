tags = [
    'python',
    'development',
    'tutorials',
    'code',
    'programing'
]

list_len = len(tags)
slice_obj = slice(0,list_len,2)

# print(slice_obj.start)
# print(slice_obj.stop)
# print(slice_obj.step)
# print(tags[slice_obj])

tags.extend(['UX'])
print(tags)
