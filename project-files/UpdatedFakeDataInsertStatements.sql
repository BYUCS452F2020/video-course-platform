/*
 * Run this file to populate the database with some fake values. 
 */ 

INSERT INTO User (Username, Password, First_Name, Last_Name, Email, Role, Sign_Up_Date)
	VALUES("Username1", "Pa$$word1", "James", "Bloomfield", "James@gmail.com", "Admin", "2020-10-21 04:30:00.000"); 
	
INSERT INTO User (Username, Password, First_Name, Last_Name, Email, Role, Sign_Up_Date)
	VALUES("Username2", "Pa$$word2", "Jaime", "Bloomfield", "Jaime@gmail.com", "Teacher", "2020-10-21 04:30:00.000");
	
INSERT INTO User (Username, Password, First_Name, Last_Name, Email, Role, Sign_Up_Date)
	VALUES("Username3", "Pa$$word3", "Jessica", "Bloomfield", "Jessica@gmail.com", "Student", "2020-10-21 04:30:00.000");

INSERT INTO Course (Course_Name, Active, Creation_Date) 
	VALUES ("The best course!", 0, "2020-10-21 04:45:00.000");

INSERT INTO Course (Course_Name, Active, Creation_Date) 
	VALUES ("The greatest course!", 0, "2020-10-21 04:45:00.000");

INSERT INTO Enrollment (Course_Id, User_Id, Enrollment_Date) 
	VALUES (1, 2, "2020-10-21 04:50:00.000"); 

INSERT INTO Enrollment (Course_Id, User_Id, Enrollment_Date) 
	VALUES (1, 3, "2020-10-21 04:50:00.000");

INSERT INTO Unit (Unit_Name, Unit_Number, Creation_Date, Course_Id)
	VALUES ("Unit One", 1, "2020-10-21 04:46:00.000", 1); 

INSERT INTO Unit (Unit_Name, Unit_Number, Creation_Date, Course_Id)
	VALUES ("Unit Two", 1, "2020-10-21 04:46:00.000", 1); 

INSERT INTO Lesson (Lesson_Name, Lesson_Video, Lesson_Number, Creation_Date, Unit_Id) 
	VALUES ("Introduction", "www.youtube.com/Intro", 1, "2020-10-21 04:50:00.000", 1); 

INSERT INTO Lesson (Lesson_Name, Lesson_Video, Lesson_Number, Creation_Date, Unit_Id) 
	VALUES ("It Begins", "www.youtube.com/ItBegins", 2, "2020-10-21 04:50:00.000", 1);

INSERT INTO Lesson (Lesson_Name, Lesson_Video, Lesson_Number, Creation_Date, Unit_Id) 
	VALUES ("It Ends", "www.youtube.com/ItEnds", 3, "2020-10-21 04:50:00.000", 1);