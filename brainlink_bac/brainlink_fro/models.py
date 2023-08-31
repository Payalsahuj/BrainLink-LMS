from django.db import models

class Department(models.Model):
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Instructor(models.Model):
    name=models.CharField(max_length=100)
    gender=models.CharField(max_length=10)
    dob=models.DateField()
    department=models.ForeignKey(Department, on_delete=models.CASCADE)
    email=models.EmailField()
    contact_number=models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
class Course(models.Model):
    course_code = models.CharField(max_length=10)
    course_name = models.CharField(max_length=200)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    credits = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.course_name
    
class Student(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    dob = models.DateField()
    major = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Enrollment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class Assignment(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class Submission(models.Model):
    submission_date = models.DateField()
    STATUS_CHOICES = [
        ('Submitted', 'Submitted'),
        ('Late', 'Late'),
        ('Graded', 'Graded'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    remarks = models.TextField()
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

class Announcement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    publish_date = models.DateField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)