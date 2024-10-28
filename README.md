# eDnevnik

## Opis
Najpre je potrebno izvršiti prijavljivanje na aplikaciju i izabrati ulogu koju imate. 
- Ukoliko posedujete ulogu roditelja, omogućeno je da izaberete dete čije aktivnosti želite da pratite. 
Nakon što izaberete dete, omogućen je uvid u izostanke učenika po datumima, kao i da li su oni opravdani ili ne.
Takođe, izlistani su svi predmeti koje učenik pohađa i nakon odabira nekog predmeta pruža se uvid u ocene koje dete ima, kao i njegova prosečna ocena. 
- Ukoliko posedujete ulogu učenika na početnoj stranici će vam se takođe prikazati lista izostanaka kao i predmeti iz trenutne godine. Nakon odabira predmeta dozvoljen je uvid u ocene.
- Ukoliko posedujete ulogu profesora, na početnoj stranici će biti prikazana sva odeljenja kojima predajte taj profesor. 
Nakon odabira odeljenja, prikazaće se svi učenici iz tog odeljenja, nakon čega je omogućen izbor određenog učenika. Profesoru je takođe dozvoljen uvid i dodela ocena na njegovim predmetima  .
Zajednička komponenta, bez obrzira koju ulogu imate, jeste navigacioni meni.
U navigacionom meniju se nalazi mogućnost da se vratite na početnu stranicu (svaka uloga ima drugačiju početnu stranicu) i mogućnost da se odjavite.
Odjava vodi na stranicu za prijavljivanje ukoliko želite ponovo da pokrenete aplikaciju.


## Instalacija
Da biste pokrenuli aplikaciju lokalno, potrebno je da pratite sledece korake:
1. Preuzmite projekat i instalirajte potrebne biblioteke
   ```bash
   composer install
   ```
   ```bash
   npm install
    ```
2. Potom je potrebno da pokrenete migracije
   ```bash
   php artisan migrate
   ```
3. Nakon migracija, pokrenite sidere i faktorije
   ```bash
   php artisan db:seed
   ```
4. Potom mozete pokrenuti server sa komandom
   ```bash
   php artisan serve
   ```
   a nakon toga sa komadom pokrecete front aplikacije
   ```bash
   npm start
   ```


## Tehnologije
- Laravel
- React
- phpMyAdmin

