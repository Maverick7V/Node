curl "localhost:3000/profile"
sleep(5)

curl "localhost:3000/profile" -H 'Content-Type:application/json' -X POST -d '{"name":"sid","email":"sid@sid.com","email":"sid@email.com"}' -i

sleep(5)
 
curl  "localhost:3000/profile"


curl "localhost:3000/profile" -H 'Content-Type:application/json' -X PUT -d '{"name":"sidDHARTH","email":"sid@ss.com","email":"sid@email.com"}' -i


sleep(3)
curl localhost:3000/profile
sleep(3)

curl -X DELETE  "localhost:3000/profile"

