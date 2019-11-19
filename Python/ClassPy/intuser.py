class User:
    def __init__(self, email, first_name, last_name):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name

    def greeting(self):
        return f'Hi {self.first_name} {self.last_name}'
    
class AdminUser(User):
    def active_users(self):
        return '500 users active'

tiffany = AdminUser('tiff@dev.com', 'Tiffany', 'Huggs')
Kris = User('K@google.com', 'Kris', 'Huggs')

print(tiffany.active_users())
print(tiffany.greeting())
