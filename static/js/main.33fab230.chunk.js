(this["webpackJsonpayurveda-test"]=this["webpackJsonpayurveda-test"]||[]).push([[0],{47:function(e,a,n){e.exports=n(62)},52:function(e,a,n){},62:function(e,a,n){"use strict";n.r(a);var r=n(0),s=n.n(r),o=n(30),t=n.n(o),i=n(71),c=(n(52),n(9)),l=n(73),d=n(76),u=n(77),m=n(74),p=n(72),w=n(70),_=function(e){var a=e.current,n=e.total;return s.a.createElement(r.Fragment,null,s.a.createElement("h2",null,"Pregunta ",a," de ",n),s.a.createElement(w.a,{type:"bar",round:!0,background:"light-2",values:[{value:a/n*100}]}))},b=n(75),g=function(e){var a=e.question;return s.a.createElement("div",null,s.a.createElement(b.a,{size:"xxlarge",className:"question"},a))},f=function(e){var a=e.letter,n=e.handleClick,r=e.answer;return s.a.createElement(m.a,{fill:!0,secondary:!0,size:"large",alignSelf:"center",label:r,value:a,onClick:n})},v=function(e){var a=e.question,n=e.handleClick;return s.a.createElement(l.a,{gap:"medium",responsive:!0},s.a.createElement(f,{letter:"a",answer:a.answer_a,handleClick:n}),s.a.createElement(f,{letter:"b",answer:a.answer_b,handleClick:n}),s.a.createElement(f,{active:!0,letter:"c",answer:a.answer_c,handleClick:n}))},E=function(e){var a=e.results,n=e.restart,o=a.map((function(e,a){return s.a.createElement(r.Fragment,{key:a},s.a.createElement(u.a,{anchor:"center"},s.a.createElement(w.a,{size:"small",type:"circle",values:[{value:e.percentage,color:e.color}]}),s.a.createElement(l.a,{direction:"row",align:"center",pad:{bottom:"xsmall"}},s.a.createElement(b.a,null,e.dosha),s.a.createElement(b.a,{size:"xlarge",weight:"bold"},e.percentage),s.a.createElement(b.a,{size:"small"},"%"))))}));return s.a.createElement(l.a,{align:"center",responsive:!0,gap:"medium",width:"100%"},s.a.createElement("h1",{className:"result-title"},"Resultados"),o,s.a.createElement(m.a,{primary:!0,color:"neutral-2",label:"Empezar de nuevo",onClick:n}))},q=[{id:1,question:"Hablando de mi apetito...",answer_a:"Prefiero comer frecuentemente pero mi nivel de hambre es variable y olvido comer con frecuencia",answer_b:"Tengo un apetito fuerte. Prefiero comer 3 veces al di\u0301a y no me gusta perder una comida",answer_c:"Prefiero comer 2 a 3 veces al di\u0301a, pero  puedo estar sin comer sin ninguna dificultad"},{id:2,question:"Si pierdo una comida...",answer_a:"Frecuentemente me mareo o me pongo ansioso",answer_b:"Frecuentemente me irrito y enojo",answer_c:"Realmente no  me molesta"},{id:3,question:"Despu\xe9s de comer...",answer_a:"Frecuentemente experimento gas o hinchaz\xf3n",answer_b:"Frecuentemente experimento quemaz\xf3n o acidez",answer_c:"Frecuentemente me siento pesado o con sue\xf1o"},{id:4,question:"Hablando de mi eliminaci\xf3n...",answer_a:"Tiendo a tener movimientos intestinales una vez al d\xeda o menos",answer_b:"Tengo 1 a 2 movimientos intestinales diarios, con regularidad y facilidad",answer_c:"Tiendo a tener un movimiento intestinal por d\xeda, sin dificultad"},{id:5,question:"Hablando de mis evacuaciones...",answer_a:"Son frecuentemente duros y secos. En ocasiones debo empujar o esforzarme",answer_b:"Son usualmente bien formados, pero a veces son sueltos y pueden quemar",answer_c:"Son usualmente bien formados, suaves y fa\u0301ciles"},{id:6,question:"Hablando de mi peso...",answer_a:"Usualmente no gano peso fa\u0301cilmente",answer_b:"Cuando gano peso, es fa\u0301cil perderlo",answer_c:"Gano peso fa\u0301cil, pero lo pierdo lento"},{id:7,question:"Mi temperatura corporal...",answer_a:"Mis manos y pies se sienten fr\xedos. Prefiero climas m\xe1s calientes",answer_b:"Me siento caliente la mayori\u0301a del tiempo, sin importar co\u0301mo es el clima",answer_c:"Me adapto fa\u0301cilmente a todas las condiciones, pero tiendo a sentir fri\u0301o"},{id:8,question:"Hablando de mi sue\xf1o...",answer_a:"Tiendo a dormir ligero y me despierto muy fa\u0301cilmente. Puede ser difi\u0301cil para mi\u0301 dormirme",answer_b:"Tiendo a dormir profundamente y me despierto con facilidad",answer_c:"Mi sue\xf1o tiende a ser profundo y largo. Puede ser dif\xedcil para mi despertar en las ma\xf1ana"},{id:9,question:"Cuando estoy bajo estr\xe9s...",answer_a:"Me preocupo o me siento abrumado con frecuencia",answer_b:"Frecuentemente me pongo  irritable, pero logro enfrentar el reto",answer_c:"Soy reclusivo y me limito a observar"},{id:10,question:"En cuanto a toma de decisiones...",answer_a:"Cambio frecuentemente y tengo dificultad en tomar decisiones",answer_b:"Tomo decisiones fa\u0301cilmente. Puedo cambiar si tengo nueva informacio\u0301n",answer_c:"Soy cuidadoso pero relajado para  tomar decisiones"},{id:11,question:"Hablando de proyectos...",answer_a:"Me gusta iniciar proyectos, pero a veces tengo dificultad para completarlos",answer_b:"Me gusta iniciar y terminar proyectos. Terminarlos es importante",answer_c:"Me gusta trabajar en un proyecto, pero prefiero dejar que otros los comiencen"},{id:12,question:"Cuando estoy en equilibrio...",answer_a:"Me siento creativo, entusiasta y vivaz.",answer_b:"Soy perceptivo, disciplinado y lo\u0301gico",answer_c:"Me siento calmado y devocional"},{id:13,question:"El tama\xf1o de mi cara es...",answer_a:"Ovalada/Angular",answer_b:"Cuadrada",answer_c:"Redonda"},{id:14,question:"Mi energ\xeda facial es...",answer_a:"Delicada, sutil",answer_b:"Apasionada, intensa",answer_c:"Suave, dulce"},{id:15,question:"Mis ojos son...",answer_a:"Peque\xf1os, r\xe1pidos",answer_b:"Medianos, profundos, penetrantes",answer_c:"Grandes, h\xfamedos, suaves"},{id:16,question:"Mi nariz es...",answer_a:"Peque\xf1a",answer_b:"Mediana",answer_c:"Grande"},{id:17,question:"El puente de mi nariz es...",answer_a:"Estrecho",answer_b:"Mediano",answer_c:"Ancho"},{id:18,question:"Mis labios son...",answer_a:"Delgados",answer_b:"Medianos",answer_c:"Gruesos"},{id:19,question:"Mi cuello es...",answer_a:"Largo",answer_b:"Mediano",answer_c:"Corto"},{id:20,question:"Mi pelo es...",answer_a:"Seco, rizado, escaso",answer_b:"Fino, calvicie, gris prematuro",answer_c:"Grueso, denso, aceitoso"},{id:21,question:"El grosor de mi piel es...",answer_a:"Delgada",answer_b:"Mediana",answer_c:"Gruesa"},{id:22,question:"En general mi piel es...",answer_a:"Seca, \xe1spera, arrugada",answer_b:"Levemente aceitosa, lunares",answer_c:"Suave, humeda, aceitosa"},{id:23,question:"La complexi\xf3n de mi piel es...",answer_a:"Falta de brillo",answer_b:"Rosada",answer_c:"P\xe1lida"},{id:24,question:"Mi estructura f\xedsica es...",answer_a:"Peque\xf1a, irregular",answer_b:"Moderada",answer_c:"Grande, s\xf3lida"},{id:25,question:"Mis huesos son...",answer_a:"Delgados",answer_b:"Moderados",answer_c:"Grandes"},{id:26,question:"La palma de mi mano es...",answer_a:"Rectangular",answer_b:"Cuadrada",answer_c:"Cuadarada/Carnuda"},{id:26,question:"Los dedos de mis manos son...",answer_a:"Largos, delgados",answer_b:"Medianos",answer_c:"Peque\xf1os, gruesos"},{id:27,question:"En general, mi manera de hablar es...",answer_a:"Entusiasta, dispersa",answer_b:"Concisa, clara",answer_c:"Pensada, deliberada"},{id:28,question:"El tama\xf1o de mi lengua es...",answer_a:"Delgada, peque\xf1a, larga",answer_b:"Mediana, puntiaguda",answer_c:"Grande, redonda, gruesa"},{id:29,question:"El color de mi lengua es...",answer_a:"Gris, caf\xe9 oscuro",answer_b:"Rosado oscuro, rojo",answer_c:"P\xe1lida"}],h=function(){var e=Object(r.useState)(0),a=Object(c.a)(e,2),n=a[0],o=a[1],t=Object(r.useState)(""),i=Object(c.a)(t,2),w=i[0],b=i[1],f=Object(r.useState)([]),h=Object(c.a)(f,2),y=h[0],M=h[1],j=Object(r.useState)(!1),S=Object(c.a)(j,2),C=S[0],z=S[1],F=Object(r.useState)([]),P=Object(c.a)(F,2),k=P[0],O=P[1],x=Object(r.useState)(""),G=Object(c.a)(x,2),T=G[0],D=G[1],H=q[n];return C?s.a.createElement(E,{results:k,restart:function(){M([]),b(""),o(0),z(!1)}}):s.a.createElement(l.a,{align:"center",responsive:!0,gap:"small",width:"100%"},s.a.createElement(_,{total:q.length,current:H.id}),s.a.createElement(u.a,null,function(){if(T)return s.a.createElement(l.a,{margin:"medium",direction:"row",height:{max:"small"},align:"center",justify:"center",animation:"pulse",gap:"small"},s.a.createElement(p.a,{size:"medium",color:"status-warning"}),s.a.createElement(d.a,{color:"status-warning",size:"small"},T))}()),s.a.createElement(g,{question:H.question}),s.a.createElement(v,{question:H,currentAnswer:w,handleClick:function(e){b(e.target.value),D("")}}),s.a.createElement(m.a,{primary:!0,label:"Siguiente",onClick:function(){var e=[H.id,w];w?(y.push(e),M(y),b(""),n+1<q.length?o(n+1):(z(!0),function(){var e=0,a=0,n=0;y.map((function(r){return"a"===r[1]?++e:"b"===r[1]?++a:++n,r}));var r=[{dosha:"vata",percentage:+parseFloat(100*e/q.length).toFixed(2),color:"accent-3"},{dosha:"pitta",percentage:+parseFloat(100*a/q.length).toFixed(2),color:"status-critical"},{dosha:"kapha",percentage:+parseFloat(100*n/q.length).toFixed(2),color:"accent-2"}];O(r)}())):D("Selecciona una opci\xf3n antes de continuar...")}}))},y={global:{font:{family:"Poppins"}}};var M=function(){return s.a.createElement(i.a,{theme:y},s.a.createElement(h,null))};t.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(M,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.33fab230.chunk.js.map