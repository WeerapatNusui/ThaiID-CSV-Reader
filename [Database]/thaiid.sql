CREATE SCHEMA thaiid DEFAULT CHARACTER SET utf8mb4 ;

CREATE TABLE thaiid.population (
  pPaper int(11) NOT NULL AUTO_INCREMENT,
  pDate date DEFAULT NULL,
  pNo varchar(255) DEFAULT NULL,
  pBirth date DEFAULT NULL,
  pGender varchar(255) DEFAULT NULL,
  pTitle varchar(255) DEFAULT NULL,
  pFName varchar(255) DEFAULT NULL,
  pLName varchar(255) DEFAULT NULL,
  pAddress varchar(255) DEFAULT NULL,
  pDisease varchar(255) DEFAULT NULL,
  pAllergy varchar(255) DEFAULT NULL,
  pPressure float DEFAULT NULL,
  pWeight float DEFAULT NULL,
  pTreatment varchar(255) DEFAULT NULL,
  PRIMARY KEY (pPaper)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE thaiid.user (
  userName varchar(255) NOT NULL,
  userPass varchar(255) DEFAULT NULL,
  PRIMARY KEY (userName)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
