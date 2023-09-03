
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Department, Instructor, Course, Student, Enrollment, Assignment, Submission, Announcement,LoginStudent, LoginInstructor, Administrator
from .serializers import (
    DepartmentSerializer, InstructorSerializer, CourseSerializer,
    StudentSerializer, EnrollmentSerializer, AssignmentSerializer,
    SubmissionSerializer, AnnouncementSerializer, StudentLoginSerializer,
    InstructorLoginSerializer, AdministratorSerializer, AdministratorLoginSerializer

)

# Department Views
class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

# Instructor Views
class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class InstructorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

# Course Views
class CourseListCreateView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

# Student Views
class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

# Enrollment Views
class EnrollmentListCreateView(generics.ListCreateAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

class EnrollmentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer

# Assignment Views
class AssignmentListCreateView(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class AssignmentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

# Submission Views
class SubmissionListCreateView(generics.ListCreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

class SubmissionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

# Announcement Views
class AnnouncementListCreateView(generics.ListCreateAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class AnnouncementRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer



class AdministratorListCreateView(generics.ListCreateAPIView):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorSerializer

    

class StudentLoginView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentLoginSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            student = Student.objects.get(email=email, password=password)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        except Student.DoesNotExist:
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)

class InstructorLoginView(generics.CreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorLoginSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            instructor = Instructor.objects.get(email=email, password=password)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        except Instructor.DoesNotExist:
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)
        

class AdministratorLoginView(generics.CreateAPIView):
    queryset = Administrator.objects.all()
    serializer_class = AdministratorLoginSerializer

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        
        try:
            administrator = Administrator.objects.get(email=email, password=password)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        except Instructor.DoesNotExist:
            return Response({'message': 'Login failed'}, status=status.HTTP_401_UNAUTHORIZED)



