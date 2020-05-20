const questions = [
	{
		id: 1,
		question: 'Hablando de mi apetito...',
		answer_a: 'Prefiero comer frecuentemente pero mi nivel de hambre es variable y olvido comer con frecuencia',
		answer_b: 'Tengo un apetito fuerte. Prefiero comer 3 veces al día y no me gusta perder una comida',
		answer_c: 'Prefiero comer 2 a 3 veces al día, pero  puedo estar sin comer sin ninguna dificultad'
	},
	{
		id: 2,
		question: 'Si pierdo una comida...',
		answer_a: 'Frecuentemente me mareo o me pongo ansioso',
		answer_b: 'Frecuentemente me irrito y enojo',
		answer_c: 'Realmente no  me molesta'
	},
	{
		id: 3,
		question: 'Después de comer...',
		answer_a: 'Frecuentemente experimento gas o hinchazón',
		answer_b: 'Frecuentemente experimento quemazón o acidez',
		answer_c: 'Frecuentemente me siento pesado o con sueño'
	},
	{
		id: 4,
		question: 'Hablando de mi eliminación...',
		answer_a: 'Tiendo a tener movimientos intestinales una vez al día o menos',
		answer_b: 'Tengo 1 a 2 movimientos intestinales diarios, con regularidad y facilidad',
		answer_c: 'Tiendo a tener un movimiento intestinal por día, sin dificultad'
	},
	{
		id: 5,
		question: 'Hablando de mis evacuaciones...',
		answer_a: 'Son frecuentemente duros y secos. En ocasiones debo empujar o esforzarme',
		answer_b: 'Son usualmente bien formados, pero a veces son sueltos y pueden quemar',
		answer_c: 'Son usualmente bien formados, suaves y fáciles'
	},
	{
		id: 6,
		question: 'Hablando de mi peso...',
		answer_a: 'Usualmente no gano peso fácilmente',
		answer_b: 'Cuando gano peso, es fácil perderlo',
		answer_c: 'Gano peso fácil, pero lo pierdo lento'
	},
	{
		id: 7,
		question: 'Mi temperatura corporal...',
		answer_a: 'Mis manos y pies se sienten fríos. Prefiero climas más calientes',
		answer_b: 'Me siento caliente la mayoría del tiempo, sin importar cómo es el clima',
		answer_c: 'Me adapto fácilmente a todas las condiciones, pero tiendo a sentir frío'
	},
	{
		id: 8,
		question: 'Hablando de mi sueño...',
		answer_a: 'Tiendo a dormir ligero y me despierto muy fácilmente. Puede ser difícil para mí dormirme',
		answer_b: 'Tiendo a dormir profundamente y me despierto con facilidad',
		answer_c: 'Mi sueño tiende a ser profundo y largo. Puede ser difícil para mi despertar en las mañana'
	},
	{
		id: 9,
		question: 'Cuando estoy bajo estrés...',
		answer_a: 'Me preocupo o me siento abrumado con frecuencia',
		answer_b: 'Frecuentemente me pongo  irritable, pero logro enfrentar el reto',
		answer_c: 'Soy reclusivo y me limito a observar'
	},
	{
		id: 10,
		question: 'En cuanto a toma de decisiones...',
		answer_a: 'Cambio frecuentemente y tengo dificultad en tomar decisiones',
		answer_b: 'Tomo decisiones fácilmente. Puedo cambiar si tengo nueva información',
		answer_c: 'Soy cuidadoso pero relajado para  tomar decisiones'
	},
	{
		id: 11,
		question: 'Hablando de proyectos...',
		answer_a: 'Me gusta iniciar proyectos, pero a veces tengo dificultad para completarlos',
		answer_b: 'Me gusta iniciar y terminar proyectos. Terminarlos es importante',
		answer_c: 'Me gusta trabajar en un proyecto, pero prefiero dejar que otros los comiencen'
	},
	{
		id: 12,
		question: 'Cuando estoy en equilibrio...',
		answer_a: 'Me siento creativo, entusiasta y vivaz.',
		answer_b: 'Soy perceptivo, disciplinado y lógico',
		answer_c: 'Me siento calmado y devocional'
	},
	{
		id: 13,
		question: 'El tamaño de mi cara es...',
		answer_a: 'Ovalada/Angular',
		answer_b: 'Cuadrada',
		answer_c: 'Redonda'
	},
	{
		id: 14,
		question: 'Mi energía facial es...',
		answer_a: 'Delicada, sutil',
		answer_b: 'Apasionada, intensa',
		answer_c: 'Suave, dulce'
	},
	{
		id: 15,
		question: 'Mis ojos son...',
		answer_a: 'Pequeños, rápidos',
		answer_b: 'Medianos, profundos, penetrantes',
		answer_c: 'Grandes, húmedos, suaves'
	},
	{
		id: 16,
		question: 'Mi nariz es...',
		answer_a: 'Pequeña',
		answer_b: 'Mediana',
		answer_c: 'Grande'
	},
	{
		id: 17,
		question: 'El puente de mi nariz es...',
		answer_a: 'Estrecho',
		answer_b: 'Mediano',
		answer_c: 'Ancho'
	},
	{
		id: 18,
		question: 'Mis labios son...',
		answer_a: 'Delgados',
		answer_b: 'Medianos',
		answer_c: 'Gruesos'
	},
	{
		id: 19,
		question: 'Mi cuello es...',
		answer_a: 'Largo',
		answer_b: 'Mediano',
		answer_c: 'Corto'
	},
	{
		id: 20,
		question: 'Mi pelo es...',
		answer_a: 'Seco, rizado, escaso',
		answer_b: 'Fino, calvicie, gris prematuro',
		answer_c: 'Grueso, denso, aceitoso'
	},
	{
		id: 21,
		question: 'El grosor de mi piel es...',
		answer_a: 'Delgada',
		answer_b: 'Mediana',
		answer_c: 'Gruesa'
	},
	{
		id: 22,
		question: 'En general mi piel es...',
		answer_a: 'Seca, áspera, arrugada',
		answer_b: 'Levemente aceitosa, lunares',
		answer_c: 'Suave, humeda, aceitosa'
	},
	{
		id: 23,
		question: 'La complexión de mi piel es...',
		answer_a: 'Falta de brillo',
		answer_b: 'Rosada',
		answer_c: 'Pálida'
	},
	{
		id: 24,
		question: 'Mi estructura física es...',
		answer_a: 'Pequeña, irregular',
		answer_b: 'Moderada',
		answer_c: 'Grande, sólida'
	},
	{
		id: 25,
		question: 'Mis huesos son...',
		answer_a: 'Delgados',
		answer_b: 'Moderados',
		answer_c: 'Grandes'
	},
	{
		id: 26,
		question: 'La palma de mi mano es...',
		answer_a: 'Rectangular',
		answer_b: 'Cuadrada',
		answer_c: 'Cuadarada/Carnuda'
	},
	{
		id: 26,
		question: 'Los dedos de mis manos son...',
		answer_a: 'Largos, delgados',
		answer_b: 'Medianos',
		answer_c: 'Pequeños, gruesos'
	},
	{
		id: 27,
		question: 'En general, mi manera de hablar es...',
		answer_a: 'Entusiasta, dispersa',
		answer_b: 'Concisa, clara',
		answer_c: 'Pensada, deliberada'
	},
	{
		id: 28,
		question: 'El tamaño de mi lengua es...',
		answer_a: 'Delgada, pequeña, larga',
		answer_b: 'Mediana, puntiaguda',
		answer_c: 'Grande, redonda, gruesa'
	},
	{
		id: 29,
		question: 'El color de mi lengua es...',
		answer_a: 'Gris, café oscuro',
		answer_b: 'Rosado oscuro, rojo',
		answer_c: 'Pálida'
	},
];

export default questions;