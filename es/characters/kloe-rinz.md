---
layout: wiki
title: Kloe Rinz
lang: es
permalink: /es/characters/kloe-rinz/
---


{% assign character = site.data.characters.kloe %}

{% include infobox-character.html
  id="kloe"
  data=character
%}


Klaudia von Auslese, quien durante años utilizó el nombre de Kloe Rinz mientras estudiaba en la Academia Jenis, es la nieta de la reina Alicia von Auslese II y heredera al trono del Reino de Liberl.

---

## Introduccion

<div class="intro-box">

  <div class="intro-buttons">
    <button onclick="showIntro('fc', event)">FC</button>
    <button onclick="showIntro('azure', event)">Azure</button>
    <button onclick="showIntro('cs4', event)">Cold Steel IV</button>
  </div>
     <div class="intro-header" id="intro-title">
    Trails in the Sky FC
  </div>

  <div class="intro-content">
    {% for item in character.intro %}
      <div id="intro-{{ item.id }}"
           class="intro-block">
        {{ item.text }}
      </div>
    {% endfor %}
  </div>

</div>

## Personalidad
Kloe es una chica amable y cariñosa, aunque a veces un poco tímida. Se preocupa profundamente por los demás y suele anteponer sus necesidades a las suyas. Debido a su posición como heredera al trono, también posee un fuerte sentido del deber y de la responsabilidad.

También está enamorada de Joshua Bright, aunque reprime sus sentimientos por respeto a su amistad con Estelle y porque sabe que los sentimientos de ambos son mutuos. A pesar de su naturaleza reservada, demuestra una gran determinación cuando debe proteger a las personas que aprecia o tomar decisiones importantes para el futuro de Liberl.

## Apariencia
Kloe es una joven de ojos morados y cabello corto del mismo color. Durante su ingreso, viste el uniforme femenino estándar de la Real Academia Jenis: una falda blanca cubierta por un chaleco morado con una corbata blanca sujeta por un broche de jade. Suele ir acompañada de Sieg, un halcón gerifalte blanco con el que mantiene un vínculo muy especial y cuyo lenguaje es capaz de comprender.

En combate, usa un estoque con guarda dorada y una gema de cornalina en el pomo.

