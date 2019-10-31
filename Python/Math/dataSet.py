tags = {
    'python',
    'coding',
    'tutorials'
}
tags_two = {
    'ruby',
    'coding',
    'tutorials',
    'development'
}

merged_tags = tags | tags_two
print(merged_tags)

query_one = 'python' in merged_tags
print(query_one)