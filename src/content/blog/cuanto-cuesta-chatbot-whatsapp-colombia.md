---
title: "Cuánto Cuesta un Chatbot de WhatsApp en Colombia"
h1: "Cuánto cuesta un chatbot de WhatsApp en Colombia: precios por tipo de negocio"
description: "Rangos reales en pesos para un negocio local, para una empresa con sistemas y para quien revende agentes. Más los costos de Meta que casi nadie presupuesta."
keyword: "cuánto cuesta un chatbot de whatsapp / precio chatbot colombia / costo whatsapp business api"
servicio: "agentes-ia-whatsapp"
publishedAt: 2026-08-23
draft: false
faq:
  - q: "¿Cuánto cuesta enviarle un mensaje de WhatsApp a un cliente en Colombia?"
    a: "Depende de la categoría. Si el cliente te escribió a ti en las últimas 24 horas, responderle no tiene costo de plataforma. Si eres tú quien inicia la conversación, pagas por mensaje entregado y la tarifa cambia según sea de marketing, utility o autenticación: marketing es varias veces más cara que las otras dos. Colombia está entre los mercados más baratos de la tarifa de Meta."
  - q: "¿WhatsApp Business API tiene costo fijo mensual?"
    a: "Meta no cobra mensualidad: cobra por mensaje entregado de las categorías facturables. La mensualidad la suele poner el proveedor tecnológico intermediario, y varía mucho entre uno y otro. Hay proveedores que cobran solo un recargo por mensaje y otros que cobran plan fijo más recargo."
  - q: "¿Es más barato un chatbot de menú que uno con inteligencia artificial?"
    a: "En construcción casi siempre sí, pero la comparación correcta no es el precio de entrada sino qué proporción de las conversaciones termina igual en manos de tu equipo. Un bot de flujos que escala el 70 por ciento de los chats salió barato y no resolvió nada. Dicho eso: si solo necesitas responder cinco preguntas fijas y capturar un teléfono, el barato es el que conviene y es honesto decirlo."
  - q: "¿Qué pasa si mi volumen de mensajes crece mucho?"
    a: "Las tarifas de utility y autenticación de Meta bajan por tramos de volumen mensual, que se reinician cada mes. Las de marketing no bajan nunca, sin importar el volumen: es una decisión deliberada de Meta para que el envío masivo promocional siga siendo caro."
---

Es la primera pregunta de casi toda reunión, y la respuesta honesta —"depende"— no le sirve a nadie para presupuestar. Así que vale la pena descomponerla, porque el problema no es que la cifra sea difícil de estimar: es que **son tres costos distintos y casi todo el mundo presupuesta solo uno**.

Un chatbot de WhatsApp te cuesta, sumados:

1. Lo que le pagas a **Meta** por los mensajes.
2. Lo que le pagas al **proveedor tecnológico** que te da acceso a la API.
3. Lo que cuesta **construir y mantener** el agente.

La gente llega preocupada por el primero. En la mayoría de los casos el primero es el más barato de los tres, y a veces es prácticamente cero.

## 1. Lo que cobra Meta

Desde el 1 de julio de 2025 Meta cobra **por mensaje entregado**, no por conversación como hacía antes. Si encuentras un artículo que habla de "precio por conversación", está desactualizado y probablemente todas sus cifras también.

Hay tres categorías facturables y una gratuita, y entender la diferencia es lo que cambia el presupuesto por completo:

- **Marketing.** Promociones, catálogos, reactivación de clientes. Es varias veces más cara que las demás, deliberadamente.
- **Utility.** Confirmaciones, estados de pedido, recordatorios de cita. Mucho más barata.
- **Autenticación.** Códigos de verificación. Similar a utility.
- **Servicio.** Todo lo que respondes dentro de la ventana de 24 horas después de que el cliente te escribió. **Gratis.**

Esa última línea es la que casi nadie sabe, y es la que decide si tu proyecto es caro o barato.

### La consecuencia que cambia el presupuesto

Si tu caso de uso es **atender a quien te escribe** —responder precios, horarios, disponibilidad, agendar una cita— entonces el cliente abre la conversación, tú respondes dentro de la ventana de 24 horas, y **esos mensajes no tienen costo de plataforma**. Un chatbot de atención puede operar con una factura de Meta cercana a cero aunque maneje miles de conversaciones al mes.

Si tu caso de uso es **salir a buscar al cliente** —campañas, promociones, reactivación de base fría— cada mensaje de marketing se paga, y ahí sí el volumen manda.

Dicho de otro modo: WhatsApp está diseñado para que **contestar sea gratis y perseguir sea caro**. Si vas a presupuestar, lo primero que hay que definir no es cuántos mensajes, sino cuántos de ellos los inicias tú.

Dos cosas más sobre la tarifa de Meta, específicas de acá: Colombia está entre los mercados más baratos de la tabla mundial, y desde abril de 2026 Meta factura en pesos colombianos, así que el costo dejó de moverse con la tasa de cambio. Las tarifas exactas cambian —a Colombia le subieron las de utility y autenticación en octubre de 2025—, así que en vez de citar un decimal que quedará viejo, la fuente que conviene mirar es [la tabla de precios oficial de Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing), que es de donde salen los números de todos los demás.

## 2. Lo que cobra el proveedor tecnológico

Para conectarte a WhatsApp Business API pasas por un proveedor, y ahí los modelos varían muchísimo:

- **Recargo por mensaje** sobre la tarifa de Meta, que es lo más común.
- **Plan mensual fijo** por número conectado o por usuario del panel.
- **Ambos**, que es lo habitual en las plataformas que además te venden CRM, bandeja compartida y campañas.

Aquí es donde conviene leer la letra pequeña, porque el recargo por mensaje aplica también a los mensajes que Meta te da gratis. Un proveedor que cobra por cada mensaje procesado convierte tu chatbot de atención —el que en Meta costaba casi nada— en una factura mensual real.

## 3. Lo que cuesta construirlo

Este es el que de verdad mueve la cifra, y el que casi nadie estima al principio.

Aquí no hay un rango único, y quien te dé uno solo te está hablando a ti o al
de al lado, pero no a los dos. Lo que cuesta construir un agente depende menos
del agente que de quién lo va a usar: una panadería y una empresa que quiere
revender agentes a sus propios clientes no están comprando lo mismo, aunque las
dos digan "quiero un chatbot de WhatsApp".

Estos son los tres perfiles con los que trabajamos. Cifras en pesos
colombianos, sin IVA.

### 1. Negocio local, un canal, alcance cerrado

Panadería, salón de belleza, consultorio, restaurante, tienda de barrio con
domicilios. Atender lo que llega por WhatsApp: el menú, los precios, los
horarios, tomar el pedido o la reserva, avisarte cuando alguien necesita una
persona.

- **Implementación: $1.500.000 – $3.500.000**
- **Mensual: $250.000 – $600.000**

Es un paquete de alcance cerrado, no un proyecto a la medida: un canal, tu
información cargada, sin integraciones con sistemas externos. Sale a ese precio
precisamente porque el alcance está acotado de entrada y reutilizamos una base
que ya está construida y probada. Se entrega en una o dos semanas.

Si lo que necesitas es esto, no pagues más. Y si alguien te cotiza quince
millones para atender el WhatsApp de una panadería, te está cotizando el
proyecto de otro.

### 2. Empresa con operación y sistemas propios

Clínica con varias sedes y agenda, cartera con cobranza, corredor de seguros,
comercio con inventario. Aquí el agente ya no solo responde: consulta
disponibilidad real, escribe en tu CRM, agenda en el calendario, cruza datos con
tu ERP.

- **Implementación: $6.000.000 – $25.000.000**
- **Mensual: $900.000 – $2.500.000**

La horquilla es ancha porque el costo lo manda el número de integraciones y el
estado en que estén tus datos, no el agente. Un proyecto de seis millones es un
canal y una integración limpia; uno de veinticinco son varios canales
compartiendo contexto y sistemas que no se hablaban entre sí. En el diagnóstico
sale en cuál de los dos extremos estás antes de comprometer presupuesto.

### 3. Quien revende o integra agentes

Agencias, BPO, call centers, casas de software que quieren ofrecer agentes a sus
propios clientes en vez de construir el músculo desde cero.

Esto no se cobra como proyecto, porque no lo es: se cobra como habilitación más
operación.

- **Habilitación y marca blanca: $10.000.000 – $20.000.000**
- **Plataforma mensual: desde $2.500.000**
- **Por cada cliente que despliegas: $500.000 – $1.500.000**

Incluye que tus agentes salgan con tu marca, capacitación a tu equipo para que
implemente sin nosotros, y soporte de segundo nivel cuando algo se sale de lo
normal. A partir de cierto volumen conviene más una tarifa fija que el cobro por
despliegue, y eso se conversa.

### Por qué el perfil 1 no cuesta lo mismo que las ofertas de un millón

Vas a encontrar chatbots de WhatsApp desde uno o dos millones de pesos, y es
justo explicar la diferencia, porque a veces esa oferta es la que te conviene.

Casi todas son **montajes sobre plataformas no-code** —ManyChat, Chatfuel,
Builderall y parecidas— donde se arma un árbol de flujos con botones. Se
entregan rápido y funcionan bien mientras el cliente escriba lo que el árbol
previó. Apenas alguien pregunta algo fuera del guion, la conversación termina
igual en manos de una persona.

La forma honesta de comparar no es el precio de entrada: es qué proporción de
las conversaciones te sigue llegando al equipo. Un bot que escala el 70% de los
chats salió barato y no resolvió nada.

### Lo que no está en esas cifras

Los costos de plataforma de las dos secciones anteriores van por fuera y se
pagan directamente: Meta te factura a ti, no a nosotros, y el proveedor de la
API también. En una operación de atención —donde el cliente inicia la
conversación— eso tiende a cero; en una de campañas, sube con el volumen.

Lo montamos bajo tu propia cuenta precisamente para que esa factura sea tuya y
puedas cambiar de proveedor —o de nosotros— sin perder el canal.

Lo que hace que ese número suba o baje es bastante predecible:

**Sube** cuando el agente tiene que conectarse a sistemas tuyos (ERP, CRM, calendario, inventario), cuando la información con la que debe responder está dispersa o desactualizada, cuando hay varios canales que deben compartir el mismo contexto, y cuando el negocio tiene muchas excepciones que nadie escribió nunca.

**Baja** cuando el alcance está bien acotado, cuando ya tienes la documentación ordenada, y cuando aceptas empezar por un solo canal y un solo caso de uso en vez de querer todo desde el primer día.

Y hay un costo que no aparece en ninguna cotización: **el mantenimiento**. Los precios cambian, el menú cambia, entra un servicio nuevo. Un agente que nadie actualiza responde con la información del año pasado, que es peor que no tener agente.

## La pregunta que sirve más que "cuánto cuesta"

Con quien mejor termina esta conversación es con quien la reformula: en vez de *cuánto cuesta*, **cuántas conversaciones estoy perdiendo hoy y cuánto vale cada una**.

Si te escriben treinta personas por semana fuera de horario y una de cada diez habría comprado, el cálculo se vuelve trivial y deja de importar si el proyecto cuesta un poco más o un poco menos. Si te escriben tres al mes, probablemente ningún chatbot se paga y es más honesto decírtelo — que es lo que hacemos en el diagnóstico cuando los números no dan.

Esa es exactamente la cuenta que hacemos en la sesión de 30 minutos, con tus cifras y no con las de un caso genérico.
