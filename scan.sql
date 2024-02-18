CREATE TABLE scans (
                          id serial PRIMARY KEY,
                          scan_date_time TIMESTAMP,
                          scan_type VARCHAR(100),
                          user_id int
);
