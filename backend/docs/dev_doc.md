# Fejlesztői dokumentáció

## Továbbfejlesztés

```bash
git clone https://github.com/andteki/zoldhum.git
cd zoldhum
composer install
```

* Be kell állítani az adatbázist (itt most SQLite példa van).
* Kulcsot kell generálni.

```bash
touch database/database.sqlite
```

Készítsünk másolatot a .env.example állományról .env néven:

```bash
cp .env.example .env
```

Állítsuk be az SQLite lehetőséget.

## Végpontok

|  végpont       | metódus | azonosítás | siker       | kudarc |
|----------------|---------|------------|-------------|--------|
| /api/register      | post    | nem        |             |        |
| /api/login         | post    | nem        |             | 401    |
| /api/employees | get     | nem        | 200 OK      | 400 Bad Request, 404 Not Found |
| /api/employees | post    | igen       | 200 OK      |
| /api/employees/{id} | put     | igen       | 201 Created |
| /api/employees/{id} | delete  | igen       |             |        |
| /api/positions | get     | nem        |             |        |
| /api/positions | post    | nem        |             |        |
| /api/positions/{id} | put     | nem        |             |        |
| /api/positions/{id} | delete  | nem        |             |        |

## Új dolgozó

```json
{
    "name":"valaki",
    "city":"valahol",
    "salary":10
}
```

## Login

```json
{
    "name":"valaki",
    "password":"titok"
}
```