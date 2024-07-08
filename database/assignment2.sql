-- 1.Insert the following new record to the account table 
--Tony, Stark, tony@starkent.com, Iam1ronM@n

INSERT INTO "account" (account_firstname, account_lastname, account_email, account_password) 
	VALUES('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');
    

-- 2. Modify the Tony Stark record to change the account_type to "Admin".

UPDATE "account" SET account_type = 'Admin' 
	WHERE account_id = 1;