---
title: "WhatsApp Business API en Colombia: Requisitos y Trámite"
h1: "WhatsApp Business API en Colombia: requisitos, documentos y por qué se demora"
description: "Qué documentos pide Meta, qué número sirve y cuál no, por qué se rechaza el nombre visible y qué hace que la aprobación tarde semanas en vez de días."
keyword: "whatsapp business api colombia requisitos / cómo obtener whatsapp api / verificación meta business"
servicio: "agentes-ia-whatsapp"
publishedAt: 2026-08-23
draft: true
faq:
  - q: "¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?"
    a: "La aplicación WhatsApp Business es gratuita, se maneja desde un celular y sirve para atender a mano. La API no tiene interfaz propia: es el acceso que permite que un sistema envíe y reciba mensajes por ti, y es lo único que sirve para conectar un chatbot, atender con varias personas a la vez o integrar con tu CRM."
  - q: "¿Puedo usar mi número actual de WhatsApp para la API?"
    a: "Solo si lo liberas primero. Un número no puede estar activo en la aplicación de WhatsApp y en la API al mismo tiempo, así que hay que borrar esa cuenta antes de migrarlo, con lo que se pierde el historial de conversaciones. Por eso muchos negocios prefieren empezar con un número nuevo y dejar el viejo operando mientras tanto."
  - q: "¿Cuánto tarda la aprobación de WhatsApp Business API?"
    a: "La verificación del negocio suele resolverse en pocos días hábiles cuando la documentación está correcta, pero Meta no publica un tiempo garantizado y un rechazo reinicia el reloj. En la práctica conviene presupuestar semanas y no días, porque casi ningún trámite pasa limpio al primer intento."
  - q: "¿Necesito tener una empresa constituida para usar WhatsApp Business API?"
    a: "Necesitas poder acreditar el negocio con documentos a nombre de quien lo opera. En Colombia eso normalmente significa RUT y certificado de Cámara de Comercio, y los datos de esos documentos tienen que coincidir con los que cargues en Meta. Sin esa coincidencia el trámite no avanza."
---

Casi todo el que llega preguntando por un chatbot de WhatsApp asume que lo difícil es la parte técnica. No lo es. Construir el agente es lo predecible; **lo que retrasa los proyectos es el trámite con Meta**, y casi siempre por motivos que no tienen nada que ver con tecnología.

Vale la pena entenderlo antes de empezar, porque hay decisiones que se toman el primer día y que después cuestan semanas deshacer.

## Primero: qué es exactamente lo que necesitas

Hay tres cosas distintas que se llaman parecido y no lo son:

- **WhatsApp**, la aplicación normal.
- **WhatsApp Business**, la aplicación gratuita para negocios pequeños: catálogo, respuestas rápidas, etiquetas. Se atiende a mano, desde un celular.
- **WhatsApp Business Platform (la API)**, que no tiene interfaz propia. Es el acceso que permite que un sistema mande y reciba mensajes por ti.

Si quieres un chatbot, que varias personas atiendan el mismo número a la vez, o conectar las conversaciones con tu CRM, necesitas la tercera. Las dos primeras no dan para eso, por más que se les insista.

## Los cuatro requisitos que hay que reunir

**Un portafolio comercial en Meta Business**, con la información del negocio completa: nombre legal, dirección, teléfono, correo y sitio web.

**La verificación del negocio**, que es donde Meta te pide documentos que acrediten que la empresa existe y que la dirección es la que dices. En Colombia lo que normalmente se presenta es el **RUT** y el **certificado de existencia y representación legal de la Cámara de Comercio**. Un servicio público o un extracto bancario sirven para acreditar domicilio cuando hace falta.

**Un número de teléfono dedicado**, que cumpla dos condiciones: que pueda recibir un código por SMS o llamada, y que **no esté activo en la aplicación de WhatsApp**. Este es el punto que más sorprende: si el número que quieres usar es el que tu negocio viene usando hace años, hay que borrar esa cuenta de WhatsApp para migrarlo, y con ella se va el historial de conversaciones.

**Un nombre visible aprobado**, que es el que verán tus clientes, más las plantillas de mensaje que Meta debe revisar antes de que puedas usarlas para iniciar conversaciones.

## Dónde se atasca de verdad el trámite

Después de acompañar varios de estos, los tropiezos se repiten con una regularidad casi aburrida. Ninguno es técnico.

**Los datos no coinciden.** La dirección del portafolio de Meta dice una cosa y el certificado de Cámara de Comercio dice otra —una sede que se movió, una abreviatura distinta, el nombre comercial en vez de la razón social— y el trámite se devuelve. Vale la pena revisar carácter por carácter que lo que cargas es literalmente lo que dice el documento.

**El nombre visible se rechaza.** Meta exige que el nombre que ven los clientes guarde relación con el negocio real. Los que fallan suelen ser los genéricos ("Servicio al Cliente", "Ventas"), los que meten promesas o promociones dentro del nombre, o los que no tienen relación con la marca acreditada.

**El número ya estaba en uso.** Se descubre a mitad del proceso que el número sigue registrado en la app, o que quedó activo en el celular de alguien que ya no trabaja ahí y nadie tiene acceso para liberarlo.

**Las plantillas se rechazan por categoría.** Un mensaje promocional presentado como *utility* se devuelve. La categoría no la escoges tú por conveniencia: la determina el contenido, y equivocarse ahí además te cambia lo que pagas por mensaje.

## Cuánto tarda de verdad

Con la documentación en orden, la verificación del negocio suele resolverse en pocos días hábiles. Meta no publica un tiempo garantizado, y cada rechazo reinicia el reloj.

Por eso, cuando planeamos un proyecto, el trámite se arranca **el primer día** y en paralelo con la construcción del agente, no después. La parte que depende de nosotros es predecible; la que depende de Meta no, y es la que manda en la fecha de salida.

Mientras el trámite avanza se puede validar el agente sobre otros canales —el chat de la web, Telegram— y llegar al día de la aprobación con el contenido ya afinado contra conversaciones reales. Es la diferencia entre estrenar el canal con algo probado y estrenarlo con algo recién nacido.

## Lo que conviene decidir antes de empezar

- **Qué número vas a usar.** Si es el actual, asume que pierdes el historial. Si es uno nuevo, planea cómo vas a avisarle a tus clientes.
- **Con qué nombre te van a ver.** Que se parezca a la marca que puedes acreditar, no al eslogan que te gustaría.
- **Quién es el dueño de la cuenta.** El portafolio de Meta debe quedar a nombre de tu empresa, con tu equipo como administrador. Un proveedor que registra el número bajo su propia cuenta te deja sin control sobre tu canal, y recuperarlo después es un problema.

Ese último punto no es un detalle administrativo: es la diferencia entre tener un canal propio y alquilárselo a alguien. Nosotros montamos todo bajo tu portafolio, con tu número y tu identidad, precisamente para que puedas irte con él si algún día decides trabajar con otro.
