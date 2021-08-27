module localhost.com/server

go 1.16

replace localhost.com/router => ./src

replace localhost.com/frontend => ./src/frontend

replace localhost.com/methods => ./src/methods

require (
	localhost.com/frontend v0.0.0-00010101000000-000000000000 // indirect
	localhost.com/methods v0.0.0-00010101000000-000000000000 // indirect
	localhost.com/router v0.0.0-00010101000000-000000000000
)
