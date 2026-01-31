let pageCount = 0;

function fechaActual(){
  const meses = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre"
  ];
  const f = new Date();
  return `Ciudad de México a ${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`;
}

function $(id){
  return document.getElementById(id);
}

/* =========================
   FORMULARIO
   ========================= */
function createFormCard(id){
  return `
    <div class="formCard" id="card-${id}">
      <div class="formHead">
        <div class="title">Formato ${id}</div>
        <div class="miniBtns">
          <button class="mini ghost" type="button" onclick="duplicatePage(${id})">Duplicar</button>
          <button class="mini danger" type="button" onclick="removePage(${id})">Eliminar</button>
        </div>
      </div>

      <label>Solicitante</label>
      <input id="in-solicitante-${id}" oninput="syncPage(${id})">

      <label>Ticket</label>
      <input id="in-ticket-${id}" oninput="syncPage(${id})">

      <label>Sistema</label>
      <select id="in-sistema-${id}" onchange="syncPage(${id})">
        <option value="E-TRANSPORTE">E-TRANSPORTE</option>
        <option value="AS400">AS400</option>
        <option value="TPAK">TPAK</option>
        <option value="CAD">CAD</option>
        <option value="DORMITORIOS">DORMITORIOS</option>
        <option value="CHATBOT RH">CHATBOT RH</option>
        <option value="NUTRICION">NUTRICION</option>
        <option value="CUENTAS CORPORATIVAS">CUENTAS CORPORATIVAS</option>
      </select>

      <label>Nombre</label>
      <input id="in-nombre-${id}" oninput="syncPage(${id})">

      <div id="usuario-normal-${id}">
        <label>Usuario</label>
        <input id="in-usuario-${id}" oninput="syncPage(${id})">
      </div>

      <div id="usuarios-corporativos-${id}" class="usuarios-corp-box" style="display:none;">
          <div class="corp-header">
            <input type="checkbox" id="check-misma-pass-${id}" onchange="syncPage(${id})" checked>
            <label class="check-label">Usar la misma contraseña para las 3</label>
          </div>

          <div id="row-input-comision-${id}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label>Usuario Comisión</label>
                <button class="mini danger" onclick="toggleCorpRow(${id}, 'comision', false)">✕ Quitar</button>
              </div>
              <input id="in-usuario-comision-${id}" oninput="syncPage(${id})">
              <div id="wrapper-pass-com-${id}" style="display:none;">
                <label>Pass Comisión</label>
                <input id="in-pass-comision-${id}" oninput="syncPage(${id})">
              </div>
          </div>
          <button id="btn-add-comision-${id}" class="mini ghost" style="display:none; margin-bottom:10px;" onclick="toggleCorpRow(${id}, 'comision', true)">+ Agregar Comisión</button>

          <div id="row-input-citas-${id}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label>Usuario Citas Médicas</label>
                <button class="mini danger" onclick="toggleCorpRow(${id}, 'citas', false)">✕ Quitar</button>
              </div>
              <input id="in-usuario-citas-${id}" oninput="syncPage(${id})">
              <div id="wrapper-pass-citas-${id}" style="display:none;">
                <label>Pass Citas Médicas</label>
                <input id="in-pass-citas-${id}" oninput="syncPage(${id})">
              </div>
          </div>
          <button id="btn-add-citas-${id}" class="mini ghost" style="display:none; margin-bottom:10px;" onclick="toggleCorpRow(${id}, 'citas', true)">+ Agregar Citas Médicas</button>

          <div id="row-input-gn-${id}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <label>Usuario Comisión GN</label>
                <button class="mini danger" onclick="toggleCorpRow(${id}, 'gn', false)">✕ Quitar</button>
              </div>
              <input id="in-usuario-comision-gn-${id}" oninput="syncPage(${id})">
              <div id="wrapper-pass-gn-${id}" style="display:none;">
                <label>Pass Comisión GN</label>
                <input id="in-pass-comision-gn-${id}" oninput="syncPage(${id})">
              </div>
          </div>
          <button id="btn-add-gn-${id}" class="mini ghost" style="display:none;" onclick="toggleCorpRow(${id}, 'gn', true)">+ Agregar Comisión GN</button>
      </div>

        <div id="wrapper-pass-general-${id}">
        <label>Contraseña <span id="label-pass-type-${id}"></span></label>
          <input id="in-contrasena-${id}" oninput="syncPage(${id})">
        </div>
      </div>
  `;
}

function politicasHTML(){
  
  return `

  <div>
          Al ingresar por primera vez se les desplegará una pantalla en donde deberá cambiar su contraseña por razones de seguridad.
        </div>

        <div style="margin-top:10px">
          Sin más por el momento, quedamos a sus órdenes para cualquier aclaración.
        </div>

        <div class="sign-block">
          <div>Atentamente</div><br>
          <div><b>Atención IT a Usuarios.</b></div>
          <div>Dirección de informática.</div>
          <div> -------------------------------------------------------------------------</div>
        </div>

        <div class="divider"></div>

    <div class="pol-title">Políticas de Seguridad (Acceso Sistemas de Información)</div>
    <div class="pol-text">
      La información de la Empresa es uno de los activos más importantes para las operaciones diarias de la misma. Parte de la
      información es confidencial y como usuario comparte la responsabilidad de protegerla. Para contribuir a la protección de la
      información y del sistema se incorpora un conjunto de reglas de seguridad en los sistemas de información que el usuario debe seguir.
      <br><br>
      El acceso a la información contenido en los equipos informáticos se otorga o revoca de acuerdo al área de trabajo de cada persona y
      del entorno de la información que requiera. El acceso a la información en los equipos informáticos deberá ser requerido a través de un
      escrito firmado por el Gerente o Director del área. Los usuarios otorgados para el ingreso a los Sistemas de información son de uso personal,
      por lo que no debe haber razón alguna para que una persona se firme en el sistema con un usuario diferente al propio. Los usuarios deben finalizar
      su sesión cuando abandonen su estación de trabajo. El sistema desconectará en forma automática, cuando los usuarios que no utilicen su sesión durante
      un periodo de 30 minutos. Las personas que no utilicen su usuario por un periodo mayor a 30 días serán deshabilitados para ingresar al sistema, para ser
      habilitados deben solicitarlo al área de Seguridad, la cual les otorgará una contraseña nueva, previa autenticación del usuario. Las personas que no utilicen
      su usuario por un periodo mayor a 90 días serán dados de baja del sistema y para su reingreso deben solicitar el acceso como usuarios nuevos. La persona que
      haga mal uso de su usuario será sancionado con la cancelación del mismo notificando al Gerente o Director del área el motivo de la cancelación y lo que resulte.
      <br><br>
      El mal uso de los accesos que le sean otorgados para el acceso a la información personal y confidencial contenida en los sistemas de información, puede incluso
      hacerlo acreedor a un delito Federal por lo establecido en 
      <strong>La Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>, vigente.
    </div>

    <div class="pol-title" style="margin-top:10px;">Políticas de Contraseña</div>
    <div class="pol-text">
      Todos los usuarios que ingresen por primera vez al sistema deberán cambiar su contraseña. Todos los usuarios deberán cambiar su contraseña cada 30 días.
      La longitud de la contraseña será como mínimo de 5 caracteres y como máximo de 10 caracteres. La contraseña no deberá contener dígitos adyacentes, caracteres
      repetidos consecutivamente, ni contener el carácter “@”. Al cambiar la contraseña, ésta no deberá ser igual a las últimas 32 contraseñas anteriores. Teclee
      cuidadosamente el usuario y la contraseña, si la específica incorrectamente 3 veces consecutivas el sistema inhabilitará el perfil de usuario para iniciar la sesión.
      <br><br>
      Los sistemas de información están pensados para hacer nuestro trabajo más fácil y para mejorar el rendimiento de nuestro negocio. Las Políticas de Seguridad deben ayudarle,
      si tiene alguna pregunta o sugerencia póngase en contacto con el Área de Service Desk al teléfono 5514005215 o al Área de Tecnología y Seguridad TI a los teléfonos 5514004514
    </div>
  `;
}


/* =========================
   HOJA
   ========================= */
function createSheet(id){
  return `
    <div class="sheet" id="sheet-${id}">
      <div class="top-title">AUTOBUSES ESTRELLA BLANCA</div>
      <div class="title-line"></div>
      <div class="title-line"></div>

      <div class="meta-row">
        <div><span id="out-solicitante-${id}"></span> :</div>
        <div id="out-fecha-${id}"></div>
      </div>

      <div class="body">
        <div style="margin:12px 0">
          En relación con la solicitud del 
          <span class="bold">ZenDesk Ticket # <span id="out-ticket-${id}"></span>
          </span>, se solicita el acceso al sistema de
          <span class="bold" id="out-sistema-${id}"></span>
          le proporcionamos la siguiente información:
        </div>

        <table class="table normal-table" id="normal-table-${id}" style="display:none;">
          <thead>
            <tr>
              <th style="width:40%">NOMBRE</th>
              <th style="width:20%">USUARIO</th>
              <th style="width:20%">CONTRASEÑA</th>
              <th style="width:20%">FIRMA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="out-nombre" style="text-align:left;padding-left:8px;"></td>
              <td class="out-usuario"></td>
              <td class="out-contrasena"></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      <table class="table cuentas-table" id="cuentas-table-${id}" style="display:none;">
        <thead>
          <tr>
            <th style="width:40%">NOMBRE</th>
            <th>TIPO</th>
            <th style="width:20%">USUARIO</th>
            <th style="width:20%">CONTRASEÑA</th>
            <th style="width:20%">FIRMA</th>
          </tr>
        </thead>
        <tbody>
          <tr id="sheet-row-comision-${id}">
            <td class="out-nombre" style="text-align:left;padding-left:8px;"></td>
            <td>COMISIÓN</td>
            <td class="out-usuario-comision"></td>
            <td class="out-pass-comision"></td> 
            <td></td>
          </tr>
          <tr id="sheet-row-citas-${id}">
            <td class="out-nombre"></td>
            <td>CITAS MÉDICAS</td>
            <td class="out-usuario-citas"></td>
            <td class="out-pass-citas"></td> 
            <td></td>
          </tr>
          <tr id="sheet-row-gn-${id}">
            <td class="out-nombre"></td>
            <td>COMISIÓN GN</td>
            <td class="out-usuario-comision-gn"></td>
            <td class="out-pass-gn"></td> 
            <td></td>
          </tr>
        </tbody>
      </table>

        ${politicasHTML()}

        <div class="footer-line"></div>
        <div class="footer-note">Nombre y Firma de quién autoriza.</div>
      </div>
    </div>
  `;
}

/* =========================
   FUNCIONES
   ========================= */
function addPage(prefill = null){
  pageCount++;
  const id = pageCount;

  $("forms").insertAdjacentHTML("beforeend", createFormCard(id));
  $("sheets").insertAdjacentHTML("beforeend", createSheet(id));

  $("in-sistema-"+id).value = prefill?.sistema ?? "E-TRANSPORTE";
  $("in-solicitante-"+id).value = prefill?.solicitante ?? "";
  $("in-ticket-"+id).value = prefill?.ticket ?? "";
  $("in-nombre-"+id).value = prefill?.nombre ?? "";
  $("in-usuario-"+id).value = prefill?.usuario ?? "";
  $("in-usuario-comision-"+id).value = prefill?.usuarioComision ?? "";
  $("in-usuario-citas-"+id).value = prefill?.usuarioCitas ?? "";
  $("in-usuario-comision-gn-"+id).value = prefill?.usuarioComisionGN ?? "";
  
  // Rellenar las nuevas contraseñas si existen (al duplicar)
  $("in-pass-comision-"+id).value = prefill?.passComision ?? "";
  $("in-pass-citas-"+id).value = prefill?.passCitas ?? "";
  $("in-pass-comision-gn-"+id).value = prefill?.passGN ?? "";
  
  $("in-contrasena-"+id).value = prefill?.contrasena ?? "";

  syncPage(id);
}

function syncPage(id){
  const sistema = $("in-sistema-"+id)?.value || "E-TRANSPORTE";
  const mismaPass = $("check-misma-pass-"+id)?.checked;

  const nombre = $("in-nombre-"+id)?.value ?? "";
  const usuarioNormal = $("in-usuario-"+id)?.value ?? "";
  const usuarioComision = $("in-usuario-comision-"+id)?.value ?? "";
  const usuarioCitas = $("in-usuario-citas-"+id)?.value ?? "";
  const usuarioComisionGN = $("in-usuario-comision-gn-"+id)?.value ?? "";
  
  const passGeneral = $("in-contrasena-"+id)?.value ?? "";
  const passComision = mismaPass ? passGeneral : ($("in-pass-comision-"+id)?.value ?? "");
  const passCitas = mismaPass ? passGeneral : ($("in-pass-citas-"+id)?.value ?? "");
  const passGN = mismaPass ? passGeneral : ($("in-pass-comision-gn-"+id)?.value ?? "");

  // Sincronización básica de la hoja
  $("out-solicitante-"+id).textContent = $("in-solicitante-"+id)?.value ?? "";
  $("out-ticket-"+id).textContent = $("in-ticket-"+id)?.value ?? "";
  $("out-sistema-"+id).textContent = sistema;
  $("out-fecha-"+id).textContent = fechaActual();
  document.querySelectorAll(`#sheet-${id} .out-nombre`).forEach(el => el.textContent = nombre);

  if(sistema === "CUENTAS CORPORATIVAS") {
    $("usuarios-corporativos-"+id).style.display = "block";
    $("usuario-normal-"+id).style.display = "none";
    $("normal-table-"+id).style.display = "none";
    $("cuentas-table-"+id).style.display = "table";
    
    if(mismaPass) {
      // Muestra el campo general, oculta los individuales
      $("wrapper-pass-com-"+id).style.display = "none";
      $("wrapper-pass-citas-"+id).style.display = "none";
      $("wrapper-pass-gn-"+id).style.display = "none";
      $("wrapper-pass-general-"+id).style.display = "block"; 
      $("label-pass-type-"+id).textContent = "(Misma para las 3)";
    } else {
      // Oculta el campo general, muestra los 3 individuales
      $("wrapper-pass-com-"+id).style.display = "block";
      $("wrapper-pass-citas-"+id).style.display = "block";
      $("wrapper-pass-gn-"+id).style.display = "block";
      $("wrapper-pass-general-"+id).style.display = "none"; // ESTO CORRIGE TU PROBLEMA
    }

    // Sincronizar tabla de la hoja
    document.querySelector(`#sheet-${id} .out-usuario-comision`).textContent = usuarioComision;
    document.querySelector(`#sheet-${id} .out-usuario-citas`).textContent = usuarioCitas;
    document.querySelector(`#sheet-${id} .out-usuario-comision-gn`).textContent = usuarioComisionGN;
    
    const tablaCorpRows = document.querySelectorAll(`#cuentas-table-${id} tbody tr`);
    tablaCorpRows[0].querySelector("td:nth-child(4)").textContent = passComision;
    tablaCorpRows[1].querySelector("td:nth-child(4)").textContent = passCitas;
    tablaCorpRows[2].querySelector("td:nth-child(4)").textContent = passGN;

  } else {
    // Modo para sistemas normales
    $("usuarios-corporativos-"+id).style.display = "none";
    $("usuario-normal-"+id).style.display = "block";
    $("normal-table-"+id).style.display = "table";
    $("cuentas-table-"+id).style.display = "none";
    $("wrapper-pass-general-"+id).style.display = "block"; // Siempre visible en sistemas normales
    $("label-pass-type-"+id).textContent = "";

    document.querySelectorAll(`#sheet-${id} .out-usuario`).forEach(el => el.textContent = usuarioNormal);
    document.querySelectorAll(`#sheet-${id} .out-contrasena`).forEach(el => el.textContent = passGeneral);
  }
}

function removePage(id){
  $("card-"+id)?.remove();
  $("sheet-"+id)?.remove();
}

function duplicatePage(id){
  addPage({
    solicitante: $("in-solicitante-"+id)?.value,
    ticket: $("in-ticket-"+id)?.value,
    sistema: $("in-sistema-"+id)?.value,
    nombre: $("in-nombre-"+id)?.value,
    usuario: $("in-usuario-"+id)?.value,
    usuarioComision: $("in-usuario-comision-"+id)?.value,
    usuarioCitas: $("in-usuario-citas-"+id)?.value,
    usuarioComisionGN: $("in-usuario-comision-gn-"+id)?.value,
    // Nuevos campos de contraseña individual
    passComision: $("in-pass-comision-"+id)?.value,
    passCitas: $("in-pass-citas-"+id)?.value,
    passGN: $("in-pass-comision-gn-"+id)?.value,
    contrasena: $("in-contrasena-"+id)?.value
  });
}

function clearAll(){
  document.querySelectorAll(".forms input").forEach(i => i.value = "");
  document.querySelectorAll(".forms select").forEach(s => s.value = "E-TRANSPORTE");
  for(let id=1; id<=pageCount; id++){
    if($("sheet-"+id)) syncPage(id);
  }
}

function printDoc(){
  // Sincroniza todas las hojas existentes
  for(let id=1; id<=pageCount; id++){
    if($("sheet-"+id)) syncPage(id);
  }

  // 🔑 buscar la PRIMER hoja que exista
  let firstValidId = null;
  for(let id=1; id<=pageCount; id++){
    if($("sheet-"+id)){
      firstValidId = id;
      break;
    }
  }

  if(!firstValidId){
    alert("No hay hojas para imprimir");
    return;
  }

  const sistema = $("in-sistema-"+firstValidId)?.value || "SISTEMA";
  const usuario = $("in-nombre-"+firstValidId)?.value || "NOMBRE";
  const ticket = $("in-ticket-"+firstValidId)?.value || "TICKET";

  const safe = str => str.replace(/[\\/:*?"<>|]/g, "").trim();
  document.title = `${safe(sistema)} ${safe(usuario)} Ticket#${safe(ticket)}`;

  window.print();
}

/* Inicial */
addPage();

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('btnTheme');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    btn.innerText = "☀️ Modo Claro";
    localStorage.setItem('theme', 'dark');
  } else {
    btn.innerText = "🌙 Modo Oscuro";
    localStorage.setItem('theme', 'light');
  }
}

// Añade esto para cargar el tema al abrir la página
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('btnTheme').innerText = "☀️ Modo Claro";
  }
};

function toggleCorpRow(id, type, show) {
  const rowInput = $(`row-input-${type}-${id}`);
  const btnAdd = $(`btn-add-${type}-${id}`);
  const sheetRow = $(`sheet-row-${type}-${id}`);

  if (show) {
    rowInput.style.display = "block";
    btnAdd.style.display = "none";
    if (sheetRow) sheetRow.style.display = "table-row";
  } else {
    rowInput.style.display = "none";
    btnAdd.style.display = "block";
    if (sheetRow) sheetRow.style.display = "none";
    
    // Limpiamos los inputs al quitar la fila para que no se filtren datos
    $(`in-usuario-${type === 'gn' ? 'comision-gn' : (type === 'comision' ? 'comision' : 'citas')}-${id}`).value = "";
  }
  syncPage(id);
}