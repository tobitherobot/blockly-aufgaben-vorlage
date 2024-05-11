## Blockly Übungsaufgaben

### Installation

1. [Installieren](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) Sie die aktuellste Version von Node.js und NPM.
2. Klonen Sie das Repository oder laden Sie die Dateien als .zip herunter und extrahieren Sie den enthaltenen Ordner in ein Verzeichnis Ihrer Wahl.
3. Öffnen Sie die Eingabeaufforderung und wechseln Sie mit `cd blockly-aufgaben-vorlage` in das erstellte Verzeichnis.
4. Führen Sie den Befehl `npm install` aus, um die benötigten Pakete herunterzuladen.
5. Nach erfolgreichem Download aller Pakete können Sie nun Ihren lokalen Blockly-Server mit dem Befehl `npm run start` starten. Die Entwicklungsoberfläche lässt sich mithilfe des Browsers unter `localhost:8080` abrufen.
6. Klicken Sie auf den `Programm Ausführen`-Knopf in der Weboberfläche, um das vorgeladene Beispielprogramm auszuführen und das Ergebnis im Ausgabefeld auszugeben. Sie können nun mit der Bearbeitung der Aufgaben beginnen.

### Aufgabe 1. Arithmetische Grundlagen

Die Primfaktorzerlegung ist ein mathematisches Verfahren, bei dem eine natürliche Zahl als Produkt ihrer Primfaktoren dargestellt wird. Multipliziert man die Primzahlen miteinander, so ist das Ergebnis die ursprüngliche Zahl.

**Beispiele**
```
   120 = 2 × 2 × 2 × 3 × 5
 1.001 = 7 × 11 × 13
    23 = 1 × 23
```

*a)* Entwickeln Sie ein Blockly-Programm, das die Primfaktoren einer Zahl ausgibt. Wie lauten die Primfaktoren von **65.751**?

*b)* Passen Sie Ihre Lösung aus *a)* an, sodass ein Funktionsaufruf mit Zahl als Eingabeparameter eine Liste aller Primfaktoren zurückgibt. Wie viele Primfaktoren besitzt die Zahl **73.728.000**?

*c)* Wie viele Primfaktoren besitzt die Zahl **7.229**? Wie lauten diese?

### Aufgabe 2. String-Manipulation

Es gibt verschiedene Methoden, um den Inhalt einer Nachricht vor anderen geheim zu halten. Ein einfaches Verfahren zur Textverschlüsselung und -entschlüsselung ist *ROT13*, das den Wert eines Buchstabens um 13 Stellen im Alphabet verschiebt. 

**Beispiele**
```
abc  => nop
xyz  => klm
test => grfg
grfg => test
```

*a)* Entwickeln Sie ein Blockly-Programm, das einen Eingabetext mithilfe des *ROT13*-Verfahrens verschlüsselt. Welcher Begriff verbirgt sich hinter der Eingabe `fcnturggv`?

*b)* Neben *ROT13* gibt es weitere *ROT*-Verfahren, die die Buchstaben eines Originaltexts um eine Anzahl X im Alphabet verschieben (*ROTX*). Welcher Begriff verbirgt sich hinter der Eingabe `kduuvapibcd` und welches *ROTX*-Verfahren wurde verwendet?  

*c)* Erstellen Sie einen eigenen Blockly-Funktionsbaustein, der das *ROT13*-Verfahren an einem Eingabetext durchführt. 

### Aufgabe 3. Datum-Konvertierung

*a)* (Einbinden des Kalender-Plugins)

*b)* (Programm zum Prüfen, ob ein Jahr ein Schaltjahr ist)

*c)* (Programm zur Ausgabe des Wochentags eines Datums)

### Aufgabe 4. Bitmap-Field

*a)*

*b)*

*c)*

### Aufgabe 5. 

### Bei Problemen

TODO

### Weiterführendes

TODO
