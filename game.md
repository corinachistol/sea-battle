






# PHP / mid / SEA BATTLE
    > basics
    > flow
    > structure
    > GET/POST HTTP
    > modules / include
    > functions
    > files

    > multiplayer
    > hosting
    > docker
    > git

    >* oop basics
    >* psr, composer, libs






# GAME / APP
    > 2d array (indexed array) 


    


    $map = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],  <---$row = $map[0]
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],     
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],  
    ];                  ^
                     $row[5]
                    ----------
                    $map[9][5]








# fix the refresh / shoot
Facem click pe un patratel- variabila shoot memoreaza coord,
 cu ajutorul header () dupa ce facem refresh , redirectionam pe pagina principala /.
 Asta inseamna 2 req catre server pe adrese diferite.

 Header sunt metadate, sunt informatii ascunse care se transmit paralel cu continul rrequest0ului BODY. Se  vad in network

 click
   |
   v
+------+
| <a>  |  ----------GET req /?shoot=6x6-----+ 
+------+                                    |
                                    processing shoot
                                            |
                                            +---- header()
                                            |
                                         render
          Location: /                       |
             v                              |
            [HHH][BBBB]                     |
<-----------------res-----------------------+
/?shoot=6x6
|
v
------- redirect ---------- GET req ---------+
                                             |
                                          render
                                             |
<-----------------res-----------------------+
/