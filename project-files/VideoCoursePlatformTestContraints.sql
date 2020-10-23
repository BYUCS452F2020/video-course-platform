/*
 * Uncomment, run, then comment out each block individually. Run them in order, or the 
 * tests with fail. Most of these tests with cause SQL errors. 
 */ 

/*
 * Add Two Users with the same username. Note there is a unique constraint in 
 * the table creation statements for Username. 
 */
/*
INSERT INTO User (Username, Password, First_Name, Last_Name, Email, Sign_Up_Date)
	VALUES("Username1", "Pa$$word1", "James", "Bloomfield", "James@gmail.com", "2020-10-21 04:30:00.000");
	
INSERT INTO User (Username, Password, First_Name, Last_Name, Email, Sign_Up_Date)
	VALUES("Username1", "Pa$$word1", "James", "Bloomfield", "James@gmail.com", "2020-10-21 04:30:00.000");
*/

/*
 * Add two of the same role (we don't want to store "Admin", "Teacher", or "Student" 
 * more than once). Note there is a unique constraint in the table creation statements 
 * for Role_Name. 
 */
/*
INSERT INTO Role (Role_Name, Creation_Date) 
	VALUES("Admin", "2020-10-21 04:35:00.000");

INSERT INTO Role (Role_Name, Creation_Date) 
	VALUES("Admin", "2020-10-21 04:35:00.000");
*/

/*
 * Assign the same person to the same role twice. 
 */
/*
INSERT INTO User_Role (User_Id, Role_Id, Assignment_Date)  
	VALUES (1, 1, "2020-10-21 04:40:00.000");

INSERT INTO User_Role (User_Id, Role_Id, Assignment_Date)  
	VALUES (1, 1, "2020-10-21 04:40:00.000");
*/

/*
 * Try to add a User_Role with a bad foreign key for the User table. 
 */ 
/*
INSERT INTO User_Role (User_Id, Role_Id, Assignment_Date)  
	VALUES (17, 1, "2020-10-21 04:40:00.000");
*/

/*
 *  Try to add a User_Role with a bad foreign key for the Role table. 
 */ 
/*
INSERT INTO User_Role (User_Id, Role_Id, Assignment_Date)  
	VALUES (1, 17, "2020-10-21 04:40:00.000");
*/

/*
 * Try to enroll twice. 
 */ 
/*
INSERT INTO Course (Course_Name, Active, Creation_Date) 
	VALUES ("The best course!", 0, "2020-10-21 04:45:00.000");

INSERT INTO Enrollment (Course_Id, User_Id, Enrollment_Date) 
	VALUES (1, 1, "2020-10-21 04:50:00.000"); 

INSERT INTO Enrollment (Course_Id, User_Id, Enrollment_Date) 
	VALUES (1, 1, "2020-10-21 04:50:00.000"); 
*/ 

/*
 * Try to enroll with bad course reference. 
 */
/*
INSERT INTO Enrollment (Course_Id, User_Id, Enrollment_Date) 
	VALUES (10, 1, "2020-10-21 04:50:00.000");
*/

/*
 * Try to enroll with bad user reference
 */
/*
INSERT INTO Enrollment (Course_Id, User_Id, Enrollment_Date) 
	VALUES (1, 10, "2020-10-21 04:50:00.000");
*/

/*
 * Try to delete a course someone has enrolled in 
 * (foreign key in Enrollment should prevent this). 
 */ 
/*
DELETE FROM Course WHERE Course_Id = 1; 
*/ 

/*
 * Try to associate a unit with a bad course value. 
 */ 
/*
INSERT INTO Unit (Unit_Name, Unit_Number, Creation_Date, Course_Id)
	VALUES ("Unit One", 1, "2020-10-21 04:46:00.000", 17); 
*/

/*
 * Try to associate a lesson with a bad unit value. 
 */ 
/*
INSERT INTO Lesson (Lesson_Name, Lesson_Video, Lesson_Number, Creation_Date, Unit_Id) 
	VALUES ("Introduction", "www.youtube.com/Intro", 1, "2020-10-21 04:50:00.000", 17);
*/ 

/*
 * Cascade delete course that no one has enrolled in (should work). Note that we save 
 * courses users have enrolled in so the user can keep track of the courses they have taken, 
 * even if the teacher ends up deciding to deactivate the course. 
 */ 
/*
DELETE FROM Enrollment; 

DELETE FROM Course WHERE Course_Id = 1; 
*/ 