<!DOCTYPE html>
<html>

<body>
    <script>
        //task1
        let admin;
        let name;

        name = "John";
        admin = name;

        alert(admin);

        //task2
        let ourPlanetName = "Earth";
        let currentUser = "Yura";

        //task3
        const BIRTHDAY = '22.01.1990';
        const age = howOldAreYou(BIRTHDAY);

        alert(`Your birthday is ${BIRTHDAY}, and now you are ${age} years old`);

        let setBDay = prompt('Введите дату Вашего дня рождения в формате дд.мм.гггг', BIRTHDAY);

        alert(`Сейчас Вам ${howOldAreYou(setBDay)} полных лет`);

        function msecInYear(mSec1, mSec2) {
            let diffMsec = Math.abs(mSec1 - mSec2);
            let msecInYear = diffMsec / (3600 * 24 * 1000 * 365.2425);
            return msecInYear = Math.trunc(msecInYear);
        };

        function howOldAreYou(bd) {
            let bdayInISO = bd[6] + bd[7] + bd[8] + bd[9] + '-' + bd[3] + bd[4] + '-' + bd[0] + bd[1];
            let bdayInMsec = Date.parse(bdayInISO);
            let dateNowInMsec = Date.now();
            let fullYear = msecInYear(bdayInMsec, dateNowInMsec);
            return fullYear;
        };
    </script>
</body>

</html>