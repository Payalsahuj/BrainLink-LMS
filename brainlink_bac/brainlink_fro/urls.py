from django.urls import path
from .views import (
    DepartmentListCreateView, DepartmentRetrieveUpdateDestroyView,
    InstructorListCreateView, InstructorRetrieveUpdateDestroyView,
    CourseListCreateView, CourseRetrieveUpdateDestroyView,
    StudentListCreateView, StudentRetrieveUpdateDestroyView,
    EnrollmentListCreateView, EnrollmentRetrieveUpdateDestroyView,
    AssignmentListCreateView, AssignmentRetrieveUpdateDestroyView,
    SubmissionListCreateView, SubmissionRetrieveUpdateDestroyView,
    AnnouncementListCreateView, AnnouncementRetrieveUpdateDestroyView,
    StudentLoginView, InstructorLoginView, AdministratorListCreateView,
    AdministratorLoginView
)


urlpatterns = [
    # Department URLs
    path('departments/', DepartmentListCreateView.as_view(), name='department-list'),
    path('departments/<int:pk>/', DepartmentRetrieveUpdateDestroyView.as_view(), name='department-detail'),

    # Instructor URLs
    path('instructors/', InstructorListCreateView.as_view(), name='instructor-list'),
    path('instructors/<int:pk>/', InstructorRetrieveUpdateDestroyView.as_view(), name='instructor-detail'),

    # Course URLs
    path('courses/', CourseListCreateView.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseRetrieveUpdateDestroyView.as_view(), name='course-detail'),

    # Student URLs
    path('students/', StudentListCreateView.as_view(), name='student-list'),
    path('students/<int:pk>/', StudentRetrieveUpdateDestroyView.as_view(), name='student-detail'),

    # Enrollment URLs
    path('enrollments/', EnrollmentListCreateView.as_view(), name='enrollment-list'),
    path('enrollments/<int:pk>/', EnrollmentRetrieveUpdateDestroyView.as_view(), name='enrollment-detail'),

    # Assignment URLs
    path('assignments/', AssignmentListCreateView.as_view(), name='assignment-list'),
    path('assignments/<int:pk>/', AssignmentRetrieveUpdateDestroyView.as_view(), name='assignment-detail'),

    # Submission URLs
    path('submissions/', SubmissionListCreateView.as_view(), name='submission-list'),
    path('submissions/<int:pk>/', SubmissionRetrieveUpdateDestroyView.as_view(), name='submission-detail'),

    # Announcement URLs
    path('announcements/', AnnouncementListCreateView.as_view(), name='announcement-list'),
    path('announcements/<int:pk>/', AnnouncementRetrieveUpdateDestroyView.as_view(), name='announcement-detail'),


    # Login
    path('student-login/', StudentLoginView.as_view(), name='student-login'),
    path('instructor-login/', InstructorLoginView.as_view(), name='instructor-login'),

    #  Administrator
    path('administrator/', AdministratorListCreateView.as_view(), name='administratort-list'),
    path('administrator-login/', AdministratorLoginView.as_view(), name='administratort-login'),
]
