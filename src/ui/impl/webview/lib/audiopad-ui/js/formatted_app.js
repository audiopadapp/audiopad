(function (e) {
    function t(t) {
        for (var n, s, r = t[0], l = t[1], u = t[2], d = 0, p = [];
            d < r.length;
            d++)s = r[d], Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]), o[s]
                = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        c && c(t);
        while (p.length) p.shift()();
        return i.push.apply(i, u || []), a()
    }
    function a() {
        for (var e, t = 0;
            t < i.length;
            t++) {
            for (var a = i[t], n = !0, r = 1;
                r < a.length;
                r++) {
                var l = a[r];
                0 !== o[l] && (n = !1)
            }
            n && (i.splice(t--, 1), e = s(s.s = a[0]))
        }
        return e
    }
    var n = {
    }
        , o = {
            app: 0
        }
        , i = [];
    function s(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t, l: !1, exports: {
            }
        }
            ;
        return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports
    }
    s.m = e, s.c = n, s.d = function (e, t, a) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0, get: a
        }
        )
    }
        , s.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.
                toStringTag, {
                value: "Module"
            }
            ), Object.defineProperty(e, "__esModule", {
                value: !0
            }
            )
        }
        , s.t = function (e, t) {
            if (1 & t && (e = s(e)), 8 & t) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (s.r(a), Object.defineProperty(a, "default", {
                enumerable: !0, value: e
            }
            ), 2 & t && "string" != typeof e) for (var n in e) s.d(a, n, function (t) {
                return e[t]
            }
                .bind(null, n));
            return a
        }
        , s.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return s.d(t, "a", t), t
        }
        , s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        , s.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [], l = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var u = 0;
        u < r.length;
        u++)t(r[u]);
    var c = l;
    i.push([0, "chunk-vendors"]), a()
}
)({
    0: function (e, t, a) {
        e.exports = a("cd49")
    }
    , "02eb": function (e, t, a) {
        "use strict";
        a("b1ba")
    }
    , "0369": function (e) {
        e.exports = JSON.parse('{
"errors": {
            "0": "Klarte ikke å spille", "1": "Klarte ikke å blafre", "2": "Klarte ikke å paus
e","3":"Klarte ikke å gjenta","4":"Klarte ikke å gjenoppta","5":"Klarte ikke �
� flytte til vask","6":"Fant ikke lyden","7":"Mappen finnes ikke","8":"Fanen fin
nes ikke","9":"Klarte ikke å sette snarvei","10":"Klarte ikke å starte videres
ending","11":"Flarte ikke å flytte tilbake","12":"Klarte ikke å flytte tilbake
 videresending","13":"Klarte ikke å tilbakestille forvalgt kilde","14":"Klarte 
ikke å sette forvalgt kilde","15":"Fant ikke youtube-dl","16":"Ugyldig nettadre
sse","17":"Klarte ikke å tolke JSON fra youtube-dl","18":"Ukjent youtybe-dl fei
l","19":"Klarte ikke å slette filen","20":"Kunne ikke forstumme","21":"Klarte i
kke å sette egendefinert lydstyrke","error":"Feil","backendFunctionMissing":"Ba
kendefunksjon mangler: {
functionName}
"}
,"search":{
"typeToSearch":"Skriv for å søke","playSelected":"{
shift}
 + {
enter}
 for å spille valgt lyd","jumpToSelected":"{
enter}
 for å hoppe til valgt lyd","changeSelection":"{
arrowKeys}
 for å endre oppløsning","noResultsFound":"Resultatløst"}
,"volume":{
"sync":"Synkroniser lydstyrker","local":"Lokal lydstyrke","remote":"Fjern-lydsty
rke"}
,"help":{
"viewSourceCode":"Vis kildekoden","search":{
"search":"søke","text":"Trykk {
ctrl}
 + {
f}
 for å {
search}
"}
,"title":"Hjelp","play":{
"text":"{
leftClick}
 for å {
play}
","play":"spille"}
,"appPassThrough":{
"text":"Trykk {
ctrl}
 + {
g}
 for å {
show}
","show":"vis programvideresending"}
,"joinOurDiscord":"Ta del i vår Discord","visitOurWebsite":"Besøk nettsiden v�
�r","reloadSounds":{
"reload":"gjeninnlaste nåværende fane","text":"Trykk {
ctrl}
 + {
r}
 for å {
reload}
"}
,"togglePlayback":{
"playPause":"pause/gjenoppta lyder til avspilling","text":"Klikk {
space}
 for å {
playPause}
"}
,"options":{
"moreOptions":"vise flere valg","text":"{
rightClick}
 for å {
moreOptions}
"}
,"supportUs":"Støtt oss"}
,"settings":{
"muteDuringPlayback":"Demp mikrofon under avspilling","useAsDefaultDevice":"Bruk
 som forvalgt enhet","allowOverlapping":"Tillat lydoverlapping","title":"Innstil
linger","stopHotkey":"Stopp-snarvei","tabHotkeysOnly":"Snarveier kun for nåvær
ende fane","minimizeToTray":"Minimer til systemkurv","audioBackend":"Lyd-bakende
","theme":{
"light":"Lys","dark":"Mørk","system":"System","title":"Drakt"}
,"deleteToTrash":"Slett til papirkurv","viewMode":{
"gridView":"Rutenettsvisning","listView":"Listevisning","title":"Visningsmodus",
"launchpadMode":"Emulert Launchpad"}
,"pushToTalkKeys":"Trykk-for-å-snakke -taster","language":"Språkoverstyring","
allowMultipleOutputs":"Tillat flere utgangsprogrammer"}
,"actions":{
"play":"Spill","addTab":"Legg til fane","search":"Søk","stop":"Stopp","refresh"
:"Gjenoppfrisk","reloadSounds":"Last inn igjen","appPassThrough":"Videresending"
,"no":"Nei","yes":"Ja","playlistMode":"Spillelistemodus","ignore":"Ignorer","ope
nFolder":"Åpne mappe","confirmation":"Bekreftelse","off":"Av","on":"På","dismi
ss":"Avslå","shuffle":"Tilfeldig sortering"}
,"welcome":{
"noTabs":"Legg til en fane ved å trykke {
addTab}
 på høyresiden","title":"Velkommen til {
programName}
","windowsGuide2":"som vist på vår nettside","windowsGuide1":"Sørg for at du 
har fulgt oppsettsstegene på {
seenOnWebsite}
","windowsDetected":"Vi har oppdaget at du bruker Windows.","linuxGuide2":"Du tr
enger ikke å endre inngangs- eller utgangsenhet noe sted.","linuxGuide1":"For �
� spille lyder må du velge utgangsprogrammet øverst til høyre.","linuxDetecte
d":"Vi har oppdaget at du bruker Linux."}
,"outputDevice":"Utgangsenhet","outputApp":"Utdata-program","input":{
"ctrl":"CTRL","arrowKeys":"Piltaster","enter":"Enter","shift":"Shift","space":"M
ellomrom","rightClick":"Høyreklikk","leftClick":"Venstreklikk"}
,"hotkeys":{
"title":"Sett snarvei","hotkey":"Snarvei","setFor":"Trykk snarvei for {
soundName}
"}
,"appPassThrough":{
"noAppsFound":"Fant ingen programmer","title":"Program-videresending","noOutputS
elected":"Du må ha valgt et utgangsprogram"}
,"noAudioBackend":{
"choose":"Velg ett nedenfor","title":"Fant ingen lydbakende","notDetected":"Fant
 ingen støttet lyd-bakende for ditt system."}
,"removeTab":{
"question":"Ønsker du å fjerne fanen {
seenOnWebsite}
?"}
,"windows":{
"badConfiguration":"Feilaktig oppsett oppdaget","setUpNow":"Sett opp nå","resta
rtAsAdmin":"Start på ny som admin","administrativePrivilegesNeeded":"Administra
tortilgang kreves!","automaticSetup":"Automatisk oppsett","selectMic":"Velg mikr
ofonen din og fortsett","virtualAudioCableMisconfiguration":"Vi har oppdaget at 
din Virtuelle Lydkabel ikke er riktig satt opp.","detectedMisconfiguration":"Opp
daget feiloppsett med VB-kabel"}
,"systemInfo":{
"copyToClipboard":"Kopier til utklippstavle","title":"Systeminfo","description":
"Legg ved følgende info når du lager en feilrapport"}
,"update":{
"updateNow":"Oppdater nå","ignore":"Ignorer","latestVersion":"Siste versjon","y
ourVersion":"Din versjon","title":"En oppdatering er tilgjengelig!"}
,"downloader":{
"close":"Lukk","startDownload":"Start nedlasting","cancelDownload":"Avbryt nedla
sting","progress":"Framdrift","placeholder":"Skriv inn en lenke","installNow":"I
nstaller nå …","success":"Vellykket nedlasting: {
title}
","eta":"Forventet ferdig","converting":"Konvertering","notAvailable":"{
youtube-dl}
 og/eller {
ffmpeg}
 er ikke installert","title":"Nedlaster"}
,"sort":{
"title":"Sorter","alphabeticalDescending":"Alfabetisk Å-A","alphabeticalAscendi
ng":"Alfabetisk rekkefølge","modifiedDescending":"I synkende rekkefølge","modi
fiedAscending":"I stigende rekkefølge"}
,"customVolume":{
"setFor":"Sett lydstyrke for {
soundName}
","context":"Sett egendefinert lydstyrke"}
,"tray":{
"exit":"Avslutt","hide":"Skjul vindu","show":"Vis vindu"}
,"favorites":{
"title":"Favoritter","favorite":"Favorittmerk"}
,"empty":{
"nothingToShow":"Ingenting å vise","noFavorites":"Du har ingen favoritter. Merk
 noen lyder som favoritter for å vise dem her.","noSounds":"Fant ingen kompatib
le lyder i mappen {
path}
. Filformatene MP3, WAV og FLAC støttes."}
,"deleteSound":{
"question":"Slett lyden {
soundName}
?","delete":"Slett"}
}
')}
,"03de":function(e,t,a){
e.exports=a.p+"img/icon.902f5790.svg"}
,"049a":function(e,t,a){
}
,"0743":function(e,t,a){
}
,"0825":function(e){
e.exports=JSON.parse('{
"settings":{
"title":"Impostazioni","allowMultipleOutputs":"Consenti più app di output","aud
ioBackend":"Backend audio","theme":{
"light":"Chiaro","dark":"Scuro","system":"Sistema","title":"Tema"}
,"muteDuringPlayback":"Disattiva microfono durante la riproduzione","useAsDefaul
tDevice":"Usare come dispositivo predefinito","minimizeToTray":"Ridurre a icona 
nella barra delle applicazioni","deleteToTrash":"Elimina nel cestino","allowOver
lapping":"Permettere la sovrapposizione del suono","viewMode":{
"launchpadMode":"Launchpad emulato","gridView":"Vista a griglia","listView":"Vis
ta elenco","title":"Modalità di visualizzazione"}
,"tabHotkeysOnly":"Tasti di scelta rapida solo per la scheda corrente","language
":"Annullamento della lingua","pushToTalkKeys":"Tasti push-to-talk","stopHotkey"
:"Interrompi il tasto di scelta rapida"}
,"favorites":{
"favorite":"Aggiungi ai preferiti","title":"Preferiti"}
,"empty":{
"noFavorites":"Non hai preferiti al momento. Segna dei suoni come preferiti per 
mostrarli qui","noSounds":"Non è stato trovato nessun suono compatibile nella c
artella {
path}
. I formati di file supportati sono mp3, wav, flac","nothingToShow":"Nulla da mo
strare"}
,"deleteSound":{
"question":"Vuoi eliminare il suono {
soundName}
?","delete":"Elimina"}
,"removeTab":{
"question":"Vuoi rimuovere la scheda {
tabName}
?"}
,"actions":{
"dismiss":"Chiudi","ignore":"Ignora","openFolder":"Apri cartella","confirmation"
:"Conferma","shuffle":"Casuale","off":"Spento","on":"On","no":"No","yes":"Sì","
playlistMode":"Modalità playlist","appPassThrough":"Pass-through","play":"Ripro
duci","reloadSounds":"Ricarica","addTab":"Aggiungi scheda","search":"Cerca","sto
p":"Interrompi","refresh":"Aggiorna"}
,"outputDevice":"Dispositivo di uscita","outputApp":"Applicazione di uscita","we
lcome":{
"windowsGuide2":"come indicato sul nostro sito web","windowsGuide1":"Assicurati 
di seguire i passaggi per l\'installazione, {
seenOnWebsite}
","windowsDetected":"Abbiamo rilevato che sei su Windows.","linuxGuide2":"Non è
 necessario cambiare il dispositivo di ingresso o uscita.","linuxGuide1":"Per ri
produrre suoni, seleziona l\'applicazione di uscita in alto a destra.","linuxDet
ected":"Abbiamo rilevato che sei su Linux.","noTabs":"Non ci sono schede al mome
nto. Aggiungine una cliccando su {
addTab}
 a destra","title":"Benvenuto in {
programName}
"}
,"errors":{
"0":"Impossibile avviare","1":"Impossibile cercare","2":"Impossibile mettere in 
pausa","3":"Impossibile ripetere","4":"Impossibile riprendere","5":"Impossibile 
spostarsi per bloccare l\'audio","6":"Suono non trovato","7":"La cartella non es
iste","8":"La scheda non esiste","9":"Impossibile impostare il tasto di scelta r
apida","10":"Impossibile avviare il passaggio","11":"Impossibile tornare indietr
o","12":"Impossibile tornare indietro di passaggio","13":"Impossibile ripristina
re l\'origine predefinita","14":"Impossibile impostare l\'origine predefinita","
15":"youtube-dl non trovato","16":"URL non valido","17":"Impossibile analizzare 
youtube-dl JSON","18":"Errore youtube-dl sconosciuto","19":"Impossibile eliminar
e il file","20":"Impossibile disattivare l\'audio","21":"Impossibile impostare i
l volume personalizzato","backendFunctionMissing":"Manca la funzione di back-end
: {
functionName}
","error":"Errore"}
,"input":{
"shift":"Shift","ctrl":"CTRL","enter":"Invio","leftClick":"Tasto sinistro","righ
tClick":"Tasto destro","arrowKeys":"Tasti freccia","space":"Spazio"}
,"tray":{
"show":"Mostra la finestra","hide":"Nascondi la finestra","exit":"Uscita"}
,"customVolume":{
"setFor":"Imposta il volume per {
nomeSuono}
","context":"Imposta volume personalizzato"}
,"noAudioBackend":{
"title":"Nessun backend audio trovato","notDetected":"Non è stato possibile ril
evare un back-end audio supportato per il sistema.","choose":"Per favore, ne sce
lga uno qui sotto"}
,"hotkeys":{
"setFor":"Imposta il tasto di scelta rapida per {
nomeSuono}
","title":"Imposta tasto di scelta rapida","hotkey":"Tasto di scelta rapida"}
,"help":{
"title":"Aiuto","search":{
"text":"Premi {
ctrl}
 + {
f}
 per {
cercare}
","search":"cerca"}
,"play":{
"text":"{
leftClick}
 per {
play}
","play":"avvia"}
,"options":{
"text":"{
rightClick}
 per {
moreOptions}
","moreOptions":"mostra più opzioni"}
,"togglePlayback":{
"text":"Premere {
space}
 per {
playPause}
","playPause":"mettere in pausa/riprendere i suoni attualmente in riproduzione"}
,"appPassThrough":{
"show":"mostra il passaggio dell\'app","text":"Premere {
ctrl}
 + {
g}
 per {
show}
"}
,"reloadSounds":{
"reload":"ricaricare la scheda corrente","text":"Premere {
ctrl}
 + {
r}
 per {
reload}
"}
,"supportUs":"Sostienici","joinOurDiscord":"Unisciti al nostro Discord","visitOu
rWebsite":"Visita il nostro sito","viewSourceCode":"Visualizza il codice sorgent
e"}
,"appPassThrough":{
"noAppsFound":"Nessuna app trovata","noOutputSelected":"Devi aver selezionato un
\'applicazione di uscita","title":"Passaggio dell\'app"}
,"search":{
"changeSelection":"{
arrowKeys}
 per modificare la selezione","jumpToSelected":"{
enter}
 per passare al suono attualmente selezionato","noResultsFound":"Nessun risultat
o trovato","playSelected":"{
shift}
 + {
enter}
 per riprodurre il suono attualmente selezionato","typeToSearch":"Digita per cer
care"}
,"sort":{
"title":"Ordina","modifiedAscending":"Ascendente modificato","modifiedDescending
":"Discendente modificato","alphabeticalDescending":"Alfabetico decrescente","al
phabeticalAscending":"Alfabetico crescente"}
,"downloader":{
"installNow":"Installa ora","placeholder":"Inserisci un link","progress":"Progre
sso","converting":"Conversione","eta":"ETA","cancelDownload":"Annulla download",
"close":"Chiudi","startDownload":"Avvia il download","title":"Downloader","notAv
ailable":"{
youtube-dl}
 e/o {
ffmpeg}
 non sono installati","success":"Scaricato con successo: {
title}
"}
,"update":{
"title":"È disponibile un aggiornamento!","yourVersion":"La tua versione","late
stVersion":"Ultima versione","ignore":"Ignora","updateNow":"Aggiorna ora"}
,"windows":{
"automaticSetup":"Configurazione automatica","detectedMisconfiguration":"Rilevat
o un errore di configurazione con VB-Cable","restartAsAdmin":"Riavvia come ammin
istratore","setUpNow":"Configura ora","badConfiguration":"Rilevata configurazion
e errata","virtualAudioCableMisconfiguration":"Abbiamo rilevato che il tuo cavo 
audio virtuale non è impostato correttamente.","selectMic":"Seleziona il microf
ono e procedi","administrativePrivilegesNeeded":"Privilegi amministrativi necess
ari!"}
,"volume":{
"sync":"Sincronizza i volumi","local":"Volume locale","remote":"Volume remoto"}
,"systemInfo":{
"copyToClipboard":"Copia negli appunti","description":"Allega queste informazion
i quando crei un rapporto di bug","title":"Informazioni di sistema"}
}
')}
,"0c31":function(e){
e.exports=JSON.parse('{
"settings":{
"stopHotkey":"Atalho de parar","allowMultipleOutputs":"Permitir saída de áudio
 para múltiplos apps","audioBackend":"Backend de audio","viewMode":{
"gridView":"Visão de grade","launchpadMode":"Emulação de Launchpad","listView
":"Vista de lista","title":"Modo de visualização"}
,"theme":{
"light":"Claro","dark":"Escuro","system":"Sistema","title":"Tema"}
,"muteDuringPlayback":"Microfone mudo durante reprodução","useAsDefaultDevice"
:"Usar como dispositivo padrão","minimizeToTray":"Minimizar para bandeja do sis
tema","deleteToTrash":"Deletar para lixeira","allowOverlapping":"Permitir sobrep
osição de som","tabHotkeysOnly":"Hotkeys somente para a aba aberta","title":"C
onfigurações","language":"Sobrepor língua","pushToTalkKeys":"Atalho de aperte
-para-falar"}
,"empty":{
"noFavorites":"Você atualmente não tem favoritos, Favorite alguns sons para os
 exibir aqui","noSounds":"Nenhum som compatível foi encontrado na pasta {
path}
. As extensões com suporte são mp3, wav, flac","nothingToShow":"Nada a mostrar
"}
,"favorites":{
"favorite":"Favorito","title":"Favoritos"}
,"deleteSound":{
"delete":"Deletar","question":"Você gostaria de deletar o som {
soundName}
?"}
,"removeTab":{
"question":"Você gostaria de remover a aba {
tabName}
?"}
,"actions":{
"openFolder":"Abrir pasta","confirmation":"Confirmação","shuffle":"Embaralhar"
,"off":"Desligado","on":"Ligado","no":"Não","yes":"Sim","playlistMode":"Modo Pl
aylist","appPassThrough":"Passar Por","play":"Tocar","reloadSounds":"Recarregar"
,"addTab":"Adicionar Aba","search":"Pesquisar","stop":"Parar","refresh":"Recarre
gar","dismiss":"Dispensar","ignore":"Ignorar"}
,"outputApp":"Aplicativo de saída","outputDevice":"Dispositivo de saída","welc
ome":{
"windowsGuide2":"como visto em nossa website","windowsGuide1":"Lembre-se de segu
ir as etapas de instalação {
seenOnWebsite}
","windowsDetected":"Nós detectamos que você está no Windows.","linuxGuide2":
"Você não precisa mudar o dispositivo de entrada ou saída em nenhum lugar.","
linuxGuide1":"Para tocar sons, basta selecionar a aplicação de saída no canto
 superior direito.","linuxDetected":"Nós detectamos que você está no Linux.",
"noTabs":"Nenhuma aba está aberta. Abra uma clicando em {
addTab}
 no lado direito","title":"Bem vindo ao {
programName}
"}
,"errors":{
"0":"Falha ao tocar","1":"Falha ao procurar","2":"Falha ao pausar","3":"Falha ao
 repetir","4":"Falha ao resumir","5":"Falha ao mover sink","6":"Som não encontr
ado","7":"Pasta não existe","8":"Aba não existe","9":"Falha ao definir atalho"
,"10":"Falha ao começar passthrough","11":"Falha ao voltar","12":"Falha ao move
r para trás o passthrough","13":"Falha ao reverter fonte padrão","14":"Falha a
o definir fonte padrão","15":"youtube-dl não encontrado","16":"URL invalido","
17":"Falha ao analisar JSON do youtube-dl","18":"Falha desconhecida no youtube-d
l","19":"Falha ao remover arquivo","20":"Falha ao silenciar","21":"Falha ao defi
nir volume customizado","backendFunctionMissing":"Função do backend faltando: 
{
functionName}
","error":"Erro"}
,"windows":{
"restartAsAdmin":"Reiniciar como administrador","administrativePrivilegesNeeded"
:"Privilégios de administrador são necessários!","automaticSetup":"Configura�
�ão automática","selectMic":"Por favor, Selecione seu microfone e prossiga","v
irtualAudioCableMisconfiguration":"Nós detectamos que seu Virtual Audio Cable n
ão está configurado corretamente.","badConfiguration":"Configuração ruim det
ectada","setUpNow":"Configurar agora","detectedMisconfiguration":"Detectado um e
rro de configuração com o cabo VB-Cable"}
,"systemInfo":{
"copyToClipboard":"Copiar para a área de transferência","description":"Anexe e
sta informação ao criar um relatório de erro","title":"Informações do siste
ma"}
,"update":{
"ignore":"Ignorar","updateNow":"Atualizar agora","latestVersion":"Ultima versão
","yourVersion":"Sua versão","title":"Uma atualização está disponível!"}
,"downloader":{
"close":"Fechar","success":"Baixado com sucesso: {
title}
","startDownload":"Começar Download","cancelDownload":"Cancelar Download","eta"
:"ETA","converting":"Convertendo","progress":"Progresso","placeholder":"Insira u
m link","installNow":"Instalar agora","notAvailable":"{
youtube-dl}
 e/ou {
ffmpeg}
 não está instalado","title":"Baixador"}
,"sort":{
"alphabeticalDescending":"Alfabético descendendo","alphabeticalAscending":"Alfa
bético ascendendo","modifiedDescending":"Modificado descendendo","modifiedAscen
ding":"Modificado ascendendo","title":"Classificar"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 para tocar o som selecionado","jumpToSelected":"{
enter}
 para pular ao som selecionado","changeSelection":"Use as {
arrowKeys}
 para mudar a seleção","noResultsFound":"Nenhum resultado encontrado","typeToS
earch":"Digite para pesquisar"}
,"input":{
"arrowKeys":"setas do teclado","rightClick":"Botão direito do mouse","leftClick
":"Botão esquerdo do mouse","space":"Espaço","enter":"Enter","shift":"Shift","
ctrl":"CTRL"}
,"appPassThrough":{
"noOutputSelected":"Você deve selecionar um aplicativo de saída","noAppsFound"
:"Nenhum aplicativo encontrado","title":"Pass through de aplicativo"}
,"volume":{
"sync":"Sincronizar volumes","remote":"Volume remoto","local":"Volume local"}
,"help":{
"viewSourceCode":"Ver o código fonte","joinOurDiscord":"Junte-se ao nosso Disco
rd","visitOurWebsite":"Visite o nosso site","supportUs":"Apoie-nos","reloadSound
s":{
"reload":"recarregar a aba atual","text":"Pressione {
ctrl}
 + {
r}
 para {
reload}
"}
,"appPassThrough":{
"show":"mostrar aplicativo de pass through","text":"Pressione {
ctrl}
 + {
g}
 para {
show}
"}
,"togglePlayback":{
"playPause":"pausar/resumir os sons que estão tocando","text":"Pressione {
space}
 para {
playPause}
"}
,"options":{
"moreOptions":"mostrar mais opções","text":"{
rightClick}
 para {
moreOptions}
"}
,"play":{
"play":"tocar","text":"{
leftClick}
 para {
play}
"}
,"search":{
"search":"pesquisar","text":"Pressione {
ctrl}
 + {
f}
 para {
search}
"}
,"title":"Ajuda"}
,"hotkeys":{
"setFor":"Defina um atalho para {
soundName}
","hotkey":"Atalho","title":"Defina um atalho"}
,"noAudioBackend":{
"choose":"Por favor, escolha uma opção","notDetected":"Nós não conseguimos d
etectar um backend de áudio suportado no seu sistema.","title":"Nenhum backend 
de áudio detectado"}
,"customVolume":{
"setFor":"Definir volume para {
soundName}
","context":"Definir volume customizado"}
,"tray":{
"exit":"Fechar","hide":"Esconder janela","show":"Mostrar janela"}
}
')}
,"15ad":function(e){
e.exports=JSON.parse('{
"errors":{
"0":"اشکال در پخش","1":"اشکال در جستجو","2":"اشکال د
ر مکث کردن","3":"اشکال در تکرار","4":"اشکال در ادا
مه دادن","5":"انتقال به سینک ناموفق بود","6":"صدا 
پیدا نشد","7":"پوشه وجود ندارد","8":"زبانه وجود ن�
�ارد","9":"اشکال در تنظیم کلید فوری","10":"اشکال د�
� شروع عبور صدا","11":"حرکت به عقب ناموفق بود","12"
:"اشکال در برگشت عبور صدا","13":"بازگرداندن به م
نبع پیش فرض ناموفق بود","14":"تنظیم منبع پیش فر�
� ناموفق بود","15":"youtube-dl پیدا نشد","16":"لینک نامع
تبر","17":"تجزیه JSON youtube-dl ناموفق بود","18":"اشکال �
�امشخص youtube-dl","19":"حذف فایل ناموفق بود","20":"بی ص
دا کردن میکروفن ناموفق بود","21":"تنظیم سفارشی 
صدا ناموفق بود","error":"خطا","backendFunctionMissing":"تابع 
پشتیبان پیدا نشد: {
functionName}
"}
,"welcome":{
"linuxDetected":"ما تشخیص دادیم که شما از لینوکس است
فاده می کنید.","linuxGuide1":"برای پخش کردن صدا کافی
ه یک برنامه خروجی از بالا سمت راست انتخاب کن�
�.","windowsDetected":"ما تشخیص دادیم که شما از ویندوز 
استفاده می کنید.","windowsGuide1":"مطمئن شوید که راه�
�مای قدم به قدم نصب را دنبال می کنید {
seenOnWebsite}
","noTabs":"در حال حاضر هیچ زبانه ای وجود ندارد. ب�
� کلیک کردن بر روی {
addTab}
 یدونه اضافه کن","title":"به {
programName}
 خوش آمدید","linuxGuide2":"شما نیازی به تغییر دستگا�
� ورودی و خروجی خود ندارید.","windowsGuide2":"همانطور
 که در وب سایت ما دیده می شود"}
,"outputApp":"برنامه خروجی","outputDevice":"دستگاه خروجی",
"actions":{
"stop":"توقف","search":"جستجو","addTab":"افزودن زبانه","relo
adSounds":"بارگیری مجدد","play":"پخش کردن","playlistMode":"ح�
�لت لیست پخش","yes":"آره","no":"نه","off":"خاموش","on":"رو�
�ن","shuffle":"مخلوط کردن","confirmation":"تائیدیه","openFolder
":"بازکردن پوشه","ignore":"چشم پوشی","dismiss":"رد کردن"
,"appPassThrough":"عبور دهید","refresh":"تازه کردن"}
,"removeTab":{
"question":"آیا می خواهید زبانه {
tabName}
 را حذف کنید؟"}
,"deleteSound":{
"delete":"حذف","question":"آیا می خواهید صدا {
soundName}
 را حذف کنید؟"}
,"empty":{
"nothingToShow":"چیزی برای نمایش وجود ندارد","noFavorites"
:"شما هیچ صدای مورد علاقه ای ندارید. صدا ها به
 مورد علاقه ها اضافه کنید تا در اینجا نمایش د
اده شوند","noSounds":"هیچ صدای سازگار در {
path}
 پیدا نشد. فایل های پشتیبانی شده mp3, wav, flac"}
,"favorites":{
"title":"مورد علاقه ها","favorite":"موردعلاقه"}
,"settings":{
"title":"تنظیمات","tabHotkeysOnly":"کلیدهای فوری فقط برا
ی زبانه فعلی","viewMode":{
"title":"حالت نمایش","gridView":"نمای شبکه ای","launchpadMode
":"لانچ پد شبیه سازی شده","listView":"نمای فهرستی"}
,"allowOverlapping":"اجازه تداخل صدا","deleteToTrash":"حذف کر�
�ن به سطل زباله","useAsDefaultDevice":"استفاده به عنوان
 دستگاه پیش فرض","muteDuringPlayback":"بی صدا کردن میکر
وفن هنگام پخش","theme":{
"title":"تم","system":"سیستم","dark":"تاریک","light":"روشن"}
,"allowMultipleOutputs":"اجازه انتخاب چندین برنامه خرو�
�ی","audioBackend":"پشتیبان صوتی","pushToTalkKeys":"کلید های 
فشار به صحبت","language":"زبان مهمتر","stopHotkey":"کلید 
فوری توقف","minimizeToTray":"کوچک کردن به سینی سیستم"
}
,"tray":{
"show":"نمایش پنجره","hide":"مخفی کردن پنجره","exit":"خ�
�وج"}
,"noAudioBackend":{
"choose":"لطفا یکی از زیر را انتخاب کنید","title":"هی�
� پشتیبان صوتی پیدا نشد","notDetected":"ما نتوانستی�
� پشتیبان صوتی پشتیبانی شده برای سیستم شما ر�
� شناسایی کنیم."}
,"hotkeys":{
"title":"تنظیم کلید فوری","hotkey":"کلید فوری","setFor":"ت
نظیم کلید فوری برای {
soundName}
"}
,"input":{
"ctrl":"CTRL","leftClick":"کلیک چپ","rightClick":"کلیک راست","spac
e":"Space","arrowKeys":"کلیدهای جهت دار","shift":"Shift","enter":"E
nter"}
,"customVolume":{
"context":"تنظیم صدا سفارشی","setFor":"تنظیم صدا برای 
{
soundName}
"}
,"help":{
"title":"راهنما","search":{
"search":"جست و جو","text":"برای {
search}
 کردن {
ctrl}
 + {
f}
 را فشار دهید"}
,"play":{
"play":"پخش","text":"{
leftClick}
 برای {
play}
 کردن"}
,"options":{
"text":"{
rightClick}
 برای {
moreOptions}
","moreOptions":"نمایش گزینه های بیشتر"}
,"appPassThrough":{
"text":"برای {
show}
 کردن {
ctrl}
 + {
g}
 را فشار دهید","show":"نمایش عبور صدا برنامه"}
,"reloadSounds":{
"reload":"بارگذاری مجدد زبانه فعلی","text":"برای {
reload}
 کردن {
ctrl}
 + {
r}
 را فشار دهید"}
,"supportUs":"از ما حمایت کنید","joinOurDiscord":"عضو سرور �
�یسکورد ما شوید","viewSourceCode":"مشاهده سورس کد","togg
lePlayback":{
"text":"{
space}
 را برای {
playPause}
 فشار دهید","playPause":"مکث/ازسرگیری صداهای در حا�
� پخش"}
,"visitOurWebsite":"مشاهده وبسایت ما"}
,"volume":{
"remote":"تنظیم صدا از راه دور","local":"تنظیم صدا مح�
�ی","sync":"همگام سازی صدا ها"}
,"appPassThrough":{
"noOutputSelected":"شما باید یک برنامه خروجی انتخاب ک
نید","title":"عبور صدای برنامه","noAppsFound":"هیچ برنا�
�ه ای پیدا نشد"}
,"search":{
"noResultsFound":"هیچ نتیجه ای پیدا نشد","jumpToSelected":"{
enter}
 برای پرش به صدای انتخاب شده فعلی","typeToSearch":"ب�
�ای جستجو بنویسید","changeSelection":"{
arrowKeys}
 برای تغییر انتخاب","playSelected":"{
shift}
 + {
enter}
 برای پخش صدای انتخاب شده فعلی"}
,"sort":{
"title":"طبقه بندی","modifiedAscending":"اصلاح شده صعودی","
modifiedDescending":"اصلاح شده نزولی","alphabeticalAscending":"حر
وف الفبا صعودی","alphabeticalDescending":"حروف الفبا نزو
لی"}
,"downloader":{
"title":"دانلود کننده","notAvailable":"{
youtube-dl}
 و/یا {
ffmpeg}
 نصب نشده اند","installNow":"اکنون نصب کن","placeholder":"ی
ک لینک وارد کنید","progress":"پیشرفت","eta":"زمان تقر�
�بی اتمام","cancelDownload":"لغو دانلود","startDownload":"شرو
ع دانلود","success":"{
title}
 با موفقیت دانلود شد","close":"بستن","converting":"در حا
ل تبدیل"}
,"update":{
"yourVersion":"نسخه شما","latestVersion":"آخرین نسخه","updateNow
":"اکنون بروز رسانی کنید","ignore":"چشم پوشی","title":"
به روز رسانی در دسترس است!"}
,"systemInfo":{
"title":"مشخصات سیستم","copyToClipboard":"کپی به کلیپبور�
�","description":"هنگام ایجاد گزارش اشکال، این اطلا�
�ات را پیوست کنید"}
,"windows":{
"detectedMisconfiguration":"یک پیکربندی نادرست با VB-Cable ش�
�اسایی شد","setUpNow":"اکنون تنظیم کنید","badConfiguration"
:"پیکربندی بد شناسایی شد","selectMic":"لطفا میکروف�
� خود را انتخاب کرده و ادامه دهید","automaticSetup":"ت
نظیم خودکار","administrativePrivilegesNeeded":"دسترسی ادمین
 مورد نیاز است!","restartAsAdmin":"شروع مجدد به عنوان 
ادمین","virtualAudioCableMisconfiguration":"ما تشخیص دادیم که
 کابل صوتی مجازی شما به درستی تنظیم نشده است.
"}
}
')}
,"1f06":function(e,t,a){
}
,"210c":function(e){
e.exports=JSON.parse('{
"empty":{
"noSounds":"Tidak menemukan suara-suara yang kompatibel pada folder {
path}
. Format berkas yang didukung adalah mp3, wav, flac","nothingToShow":"Tak ada ya
ng perlu diperlihatkan","noFavorites":"Saat ini Anda tidak memiliki favorit. Pil
ih beberapa suara untuk ditampilkan di sini"}
,"deleteSound":{
"question":"Apakah Anda ingin menghapus suara {
soundName}
?","delete":"Hapus"}
,"removeTab":{
"question":"Apakah Anda ingin menghapus tab {
tabName}
?"}
,"actions":{
"ignore":"Abaikan","openFolder":"Buka folder","confirmation":"Konfirmasi","shuff
le":"Acak","off":"Mati","on":"Hidup","no":"Tidak","yes":"Ya","appPassThrough":"L
ewati","play":"Putar","reloadSounds":"Muat ulang","search":"Cari","stop":"Berhen
ti","refresh":"Muat ulang","dismiss":"Abaikan","playlistMode":"Mode daftar putar
","addTab":"Tambah Tab"}
,"welcome":{
"windowsGuide2":"seperti yang terlihat pada situs web kami","windowsGuide1":"Har
ap ikuti langkah-langkah pemasangan {
seenOnWebsite}
","windowsDetected":"Kami mendeteksi bahwa Anda sedang menggunakan Windows.","li
nuxDetected":"Kami mendeteksi bahwa Anda sedang menggunakan Linux.","title":"Sel
amat datang di {
programName}
","noTabs":"Tidak ada tab. Tambahkan satu dengan mengklik {
addTab}
 di sisi kanan","linuxGuide2":"Anda tidak perlu mengubah perangkat input atau ou
tput di mana saja.","linuxGuide1":"Untuk memutar suara Anda hanya perlu memilih 
aplikasi keluaran di kanan atas."}
,"tray":{
"exit":"Keluar","hide":"Sembunyikan jendela","show":"Perlihatkan jendela"}
,"settings":{
"theme":{
"light":"Cerah","dark":"Gelap","system":"Sistem","title":"Tema"}
,"muteDuringPlayback":"Bisukan mikrofon saat pemutaran","useAsDefaultDevice":"Gu
nakan sebagai perangkat utama","viewMode":{
"listView":"Tampilan daftar","launchpadMode":"Emulasi Launchpad","gridView":"Tam
pilan grid","title":"Mode tampilan"}
,"title":"Pengaturan","deleteToTrash":"Hapus ke tempat sampah","pushToTalkKeys":
"Tombol push-to-talk","stopHotkey":"Hentikan tombol pintas","allowMultipleOutput
s":"Izinkan beberapa aplikasi keluaran","audioBackend":"Backend audio","minimize
ToTray":"Minimalkan ke baki sistem","allowOverlapping":"Izinkan suara tumpang ti
ndih","tabHotkeysOnly":"Tombol pintas hanya untuk tab saat ini","language":"Gant
i bahasa"}
,"favorites":{
"favorite":"Favorit","title":"Favorit"}
,"appPassThrough":{
"title":"Aplikasi pass through","noOutputSelected":"Anda harus memilih aplikasi 
keluaran","noAppsFound":"Tidak ada aplikasi yang ditemukan"}
,"help":{
"appPassThrough":{
"show":"tampilkan aplikasi pass through","text":"Tekan {
ctrl}
 + {
g}
 untuk {
tampilkan}
"}
,"togglePlayback":{
"playPause":"jeda/lanjutkan suara yang sedang diputar","text":"Tekan {
spasi}
 ke {
memutarMenjeda}
"}
,"options":{
"moreOptions":"tampilkan lebih banyak opsi","text":"{
Klik kanan}
 ke {
Opsi lainnya}
"}
,"play":{
"play":"putar","text":"{
klik kiri}
 untuk {
memutar}
"}
,"search":{
"search":"cari","text":"Tekan {
ctrl}
 + {
f}
 untuk {
menelusuri}
"}
,"title":"Bantuan","viewSourceCode":"Lihat kode sumber","joinOurDiscord":"Bergab
ung dengan Discord kami","visitOurWebsite":"Kunjungi situs kami","supportUs":"Du
kung kami","reloadSounds":{
"reload":"muat ulang tab saat ini","text":"Tekan {
ctrl}
 + {
r}
 untuk {
memuat}
"}
}
,"input":{
"space":"Spasi","arrowKeys":"Tombol panah","rightClick":"Klik kanan","leftClick"
:"Klik kiri","enter":"Enter","shift":"Shift","ctrl":"CTRL"}
,"sort":{
"modifiedDescending":"Menurun yang dimodifikasi","alphabeticalDescending":"Turun
 menurut abjad","alphabeticalAscending":"Naik menurut abjad","title":"Urutkan","
modifiedAscending":"Naik yang dimodifikasi"}
,"errors":{
"0":"Gagal memutar","1":"Gagal mencari","2":"Gagal menjeda","3":"Gagal mengulang
i","4":"Gagal melanjutkan","5":"Gagal memindahkan ke sink","6":"Suara tidak dite
mukan","7":"Folder tidak ada","8":"Tab tidak ada","9":"Gagal menyetel hotkey","1
0":"Gagal memulai passthrough","11":"Gagal mundur","12":"Gagal memundurkan passt
hrough","13":"Gagal mengembalikan sumber default","14":"Gagal menyetel sumber de
fault","15":"youtube-dl tidak ditemukan","16":"URL tidak valid","17":"Gagal meng
urai youtube-dl JSON","18":"Kegagalan youtube-dl yang tidak diketahui","19":"Gag
al menghapus berkas","20":"Gagal membisukan","21":"Gagal menyetel volume kustom"
,"backendFunctionMissing":"Fungsi backend tidak ada: {
functionName}
","error":"Galat"}
,"windows":{
"restartAsAdmin":"Mulai ulang sebagai admin","administrativePrivilegesNeeded":"I
zin administratif diperlukan!","automaticSetup":"Menyetel secara otomatis","sele
ctMic":"Silakan pilih mikrofon Anda dan lanjutkan","virtualAudioCableMisconfigur
ation":"Kami telah mendeteksi bahwa Kabel Audio Virtual Anda tidak diatur dengan
 benar.","badConfiguration":"Konfigurasi buruk terdeteksi","setUpNow":"Siapkan s
ekarang","detectedMisconfiguration":"Ada kesalahan konfigurasi dengan VB-Cable"}
,"systemInfo":{
"copyToClipboard":"Salin ke papanklip","description":"Lampirkan informasi ini sa
at membuat laporan bug","title":"Informasi sistem"}
,"update":{
"ignore":"Abaikan","updateNow":"Perbarui sekarang","latestVersion":"Versi terbar
u","yourVersion":"Versi anda","title":"Pembaruan tersedia!"}
,"downloader":{
"close":"Tutup","success":"Berhasil diunduh: {
title}
","startDownload":"Mulai unduh","cancelDownload":"Batal Unduh","eta":"ETA","conv
erting":"Mengkonversi","progress":"Kemajuan","placeholder":"Masukkan tautan","in
stallNow":"Pasang sekarang","notAvailable":"{
youtube-dl}
 dan/atau {
ffmpeg}
 tidak terinstal","title":"Pengunduh"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 untuk memutar suara yang sedang dipilih","jumpToSelected":"{
enter}
 untuk ke suara yang dipilih saat ini","changeSelection":"{
arrowKeys}
 untuk mengubah pilihan","noResultsFound":"Tidak menemukan apapun","typeToSearch
":"Ketik untuk mencari"}
,"volume":{
"sync":"Sinkronkan volume","remote":"Volume jarak jauh","local":"Volume lokal"}
,"outputDevice":"Perangkat keluaran","outputApp":"Aplikasi keluaran","hotkeys":{
"title":"Setel tombol pintas","setFor":"Setel tombol pintas untuk {
soundName}
","hotkey":"Tombol pintas"}
,"noAudioBackend":{
"choose":"Pilih salah satu","notDetected":"Kami tidak dapat mendeteksi backend a
udio yang didukung untuk sistem Anda.","title":"Tak ada backend audio yang ditem
ukan"}
,"customVolume":{
"setFor":"Setel volume untuk {
soundName}
","context":"Setel volume khusus"}
}
')}
,2614:function(e){
e.exports=JSON.parse('{
"update":{
"updateNow":"Ĝisdatigi nun","latestVersion":"Plej nova versio","yourVersion":"V
ia versio","ignore":"Ignori"}
,"downloader":{
"installNow":"Instali nun","close":"Fermi"}
,"sort":{
"title":"Ordigi"}
,"help":{
"viewSourceCode":"Vidi la fontokodon","joinOurDiscord":"Aliĝi al nia Discord","
visitOurWebsite":"Viziti nian retpaĝon","title":"Helpo"}
,"input":{
"arrowKeys":"Sagoklavoj","rightClick":"Dekstra alklako","leftClick":"Maldekstra 
alklako","space":"Spaceto","shift":"Maj","ctrl":"Stir"}
,"settings":{
"viewMode":{
"gridView":"Krada vido","listView":"Lista vido","title":"Vidreĝimo"}
,"theme":{
"light":"Hela","dark":"Malhela","system":"Sistema","title":"Etoso"}
,"title":"Agordoj"}
,"actions":{
"confirmation":"Konfirmo","openFolder":"Malfermi dosierujon","ignore":"Ignori","
no":"Ne","yes":"Jes","appPassThrough":"Trapasi","play":"Ludi","reloadSounds":"Re
ŝargi","addTab":"Enmeti langeton","search":"Serĉi"}
,"welcome":{
"title":"Bonvenon al {
programeName}
"}
}
')}
,"377c":function(e,t,a){
}
,"49f8":function(e,t,a){
var n={
"./ar.json":"af08","./bar.json":"a4e4","./de.json":"6ce2","./el.json":"f184","./
en.json":"edd4","./eo.json":"2614","./es.json":"a306","./fa.json":"15ad","./fi.j
son":"5754","./fr.json":"f693","./id.json":"210c","./it.json":"0825","./nb_NO.js
on":"0369","./nl.json":"a625","./pl.json":"89b2","./pt_BR.json":"0c31","./ro.jso
n":"9542","./ru.json":"7704","./sv.json":"4c5b","./tr.json":"ffeb","./uk.json":"
62ea"}
;
function o(e){
var t=i(e);
return a(t)}
function i(e){
if(!a.o(n,e)){
var t=new Error("Cannot find module '"+e+"'");
throw t.code="MODULE_NOT_FOUND",t}
return n[e]}
o.keys=function(){
return Object.keys(n)}
,o.resolve=i,e.exports=o,o.id="49f8"}
,"4c5b":function(e){
e.exports=JSON.parse('{
"settings":{
"tabHotkeysOnly":"Genvägar endast för nuvarande flik","title":"Inställningar"
,"language":"Språköverskridning","pushToTalkKeys":"Tryck-för-tal tangenter","
stopHotkey":"Stopp genväg","allowMultipleOutputs":"Tillåt flera utmatningsappl
ikationer","audioBackend":"Ljud backend","theme":{
"light":"Ljus","dark":"Mörk","system":"System","title":"Tema"}
,"muteDuringPlayback":"Stäng av mikrofonen under uppspelning","useAsDefaultDevi
ce":"Använd som standardenhet","minimizeToTray":"Minimera till systemfältet","
deleteToTrash":"Ta bort till papperskorgen","allowOverlapping":"Tillåt ljudöve
rlappning","viewMode":{
"gridView":"Rutnätsvy","listView":"Listvy","title":"Visningsläge","launchpadMo
de":"Emulerad Launchpad"}
}
,"favorites":{
"favorite":"Favorit","title":"Favoriter"}
,"empty":{
"noFavorites":"Du har inga favoriter. Favorisera några ljud för att se dem hä
r","noSounds":"Inga kompatibla ljud hittades i mappen {
path}
. Filformaten som stöds är mp3, wav, flac","nothingToShow":"Inget att visa"}
,"deleteSound":{
"question":"Vill du ta bort ljudet {
soundName}
?","delete":"Ta bort"}
,"removeTab":{
"question":"Vill du ta bort fliken {
tabName}
?"}
,"actions":{
"dismiss":"Avfärda","ignore":"Ignorera","openFolder":"Öppen mapp","confirmatio
n":"Bekräftelse","shuffle":"Blanda","off":"Av","on":"På","no":"Nej","yes":"Ja"
,"playlistMode":"Spellistsläge","appPassThrough":"Passera genom","play":"Spela"
,"refresh":"Uppdatera","reloadSounds":"Ladda om","addTab":"Lägg till Flik","sea
rch":"Sök","stop":"Stoppa"}
,"welcome":{
"noTabs":"Det finns inga flikar. Lägg till en genom att klicka på {
addTab}
 på höger sida","windowsGuide2":"som finns på våran sida","windowsGuide1":"S
e till att följa installationsstegen {
seenOnWebsite}
","windowsDetected":"Vi har noterat att du använder Windows.","linuxGuide2":"Du
 behöver inte ändra din inmatnings eller utmatningsenhet någonstans.","linuxG
uide1":"För att spela ljud behöver du bara välja ett utmatningsprogram uppe t
ill höger.","linuxDetected":"Vi har noterat att du använder Linux.","title":"V
älkommen till {
programName}
"}
,"outputDevice":"Utmatningsenhet","outputApp":"Utmatningsapplikation","tray":{
"exit":"Avsluta","hide":"Dölj fönster","show":"Visa fönster"}
,"help":{
"joinOurDiscord":"Gå med i vår Discord","visitOurWebsite":"Besök vår hemsida
","supportUs":"Stöd oss","reloadSounds":{
"reload":"ladda om aktuell flik","text":"Tryck på {
ctrl}
 + {
r}
 för att {
reload}
"}
,"appPassThrough":{
"text":"Tryck på {
ctrl}
 + {
g}
 för att {
show}
","show":"visa applikation pass through"}
,"togglePlayback":{
"text":"Tryck på {
space}
 för att {
playPause}
","playPause":"pausa/återuppta de ljud som spelas upp för närvarande"}
,"options":{
"moreOptions":"visa fler alternativ","text":"{
rightClick}
 för att {
moreOptions}
"}
,"play":{
"play":"spela","text":"{
leftClick}
 för att {
play}
"}
,"viewSourceCode":"Se våran källkod","search":{
"search":"sök","text":"Tryck på {
ctrl}
 + {
f}
 för att {
search}
"}
,"title":"Hjälp"}
,"volume":{
"remote":"Fjärrvolym","local":"Lokal volym","sync":"Synka volymer"}
,"appPassThrough":{
"noOutputSelected":"Du måste välja en utmatningsapplikation","noAppsFound":"In
ga appar hittade","title":"Applikation pass through"}
,"errors":{
"0":"Det gick inte att spela","1":"Det gick inte att söka","2":"Det gick inte a
tt pausa","3":"Det gick inte att upprepa","4":"Det gick inte att återuppta","5"
:"Det gick inte att flytta till sink","6":"Ljudet hittades inte","7":"Mappen fin
ns inte","8":"Fliken finns inte","9":"Misslyckades att sätta genväg","10":"Mis
slyckades med att starta passthrough","11":"Misslyckades med att flytta tillbaka
","12":"Misslyckades med att flytta tillbaka passthrough","13":"Misslyckades med
 att återställa standardkällan","14":"Misslyckades med att ställa in standar
dkällan","15":"youtube-dl hittades inte","16":"Ogiltig URL","17":"Det gick inte
 att tolka youtube-dl JSON","18":"Okänt fel i youtube-dl","19":"Det gick inte a
tt ta bort filen","20":"Gick inte att stänga av ljudet","21":"Misslyckades med 
att ställa in anpassad volym","backendFunctionMissing":"Backend-funktion saknas
: {
functionName}
","error":"Fel"}
,"windows":{
"restartAsAdmin":"Starta om som administratör","administrativePrivilegesNeeded"
:"Administrativa rättigheter behövs!","automaticSetup":"Automatisk konfigureri
ng","selectMic":"Välj din mikrofon och fortsätt","virtualAudioCableMisconfigur
ation":"Vi har upptäckt att din virtuella ljudkabel inte är korrekt inställd.
","badConfiguration":"Felaktig konfiguration upptäckt","setUpNow":"Konfigurera 
nu","detectedMisconfiguration":"Upptäckte en felkonfiguration med VB-Cable"}
,"systemInfo":{
"copyToClipboard":"Kopiera till urklipp","description":"Bifoga denna information
 när du skapar en buggrapport","title":"Systeminformation"}
,"update":{
"ignore":"Ignorera","updateNow":"Uppdatera nu","latestVersion":"Senaste versione
n","yourVersion":"Din version","title":"En uppdatering är tillgänglig!"}
,"downloader":{
"close":"Stäng","success":"Har hämtats: {
title}
","startDownload":"Starta nedladdning","cancelDownload":"Avbryt nedladdning","et
a":"ETA","converting":"Konverterar","progress":"Framsteg","placeholder":"Ange en
 länk","installNow":"Installera nu","notAvailable":"{
youtube-dl}
 och/eller {
ffmpeg}
 är inte installerade","title":"Nedladdare"}
,"sort":{
"alphabeticalDescending":"Alfabetiskt fallande","alphabeticalAscending":"Alfabet
iskt stigande","modifiedDescending":"Modifierad fallande","modifiedAscending":"M
odifierad stigande","title":"Sortera"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 för att spela upp det markerade ljudet","jumpToSelected":"{
enter}
 för att hoppa till det aktuella ljudet","changeSelection":"{
arrowKeys}
 för att ändra urval","noResultsFound":"Inga träffar","typeToSearch":"Skriv f
ör att söka"}
,"input":{
"space":"Blanksteg","arrowKeys":"Piltangenter","rightClick":"Högerklick","leftC
lick":"Vänsterklick","enter":"Retur","shift":"Skift","ctrl":"CTRL"}
,"hotkeys":{
"setFor":"Sätt genväg för {
soundName}
","hotkey":"Genväg","title":"Sätt genväg"}
,"noAudioBackend":{
"choose":"Välj en nedan","notDetected":"Vi kunde inte upptäcka en ljudbackend 
som stöds för ditt system.","title":"Inget ljudbackend hittades"}
,"customVolume":{
"setFor":"Sätt volym för {
soundName}
","context":"Sätt anpassad volym"}
}
')}
,5178:function(e,t,a){
"use strict";
a("1f06")}
,5754:function(e){
e.exports=JSON.parse('{
"welcome":{
"title":"Tervetuloa {
programName}
iin","noTabs":"Tässä ei ole tällä hetkellä välilehtiä. Lisää välilehti
 painamalla {
addTab}
 oikeasta laidasta","linuxDetected":"Olemme havainneet, että käytät Linuxia."
,"linuxGuide2":"Sinun ei tarvitse vaihtaa äänen sisääntulo- tai ulostulolait
ettasi mistään.","windowsGuide1":"Seuraa asennusohjeita {
seenOnWebsite}
","windowsGuide2":"kuten verkkosivuillamme lukee","windowsDetected":"Olemme hava
inneet, että käytät Windowsia.","linuxGuide1":"Soittaaksesi ääniä sinun tu
lee valita ulostulo-ohjelma oikeasta yläkulmasta."}
,"outputApp":"Ulostulo-ohjelma","outputDevice":"Ulostulolaite","actions":{
"refresh":"Päivitä","play":"Toista","appPassThrough":"Läpivienti","playlistMo
de":"Soittolistatila","yes":"Kyllä","on":"Päällä","off":"Pois","ignore":"Jä
tä huomiotta","dismiss":"Hylkää","addTab":"Lisää välilehti","reloadSounds"
:"Lataa uudelleen","no":"Ei","confirmation":"Vahvistus","stop":"Lopeta","search"
:"Etsi","shuffle":"Sekoita","openFolder":"Avaa hakemisto"}
,"removeTab":{
"question":"Haluatko poistaa välilehden {
tabName}
?"}
,"deleteSound":{
"delete":"Poista","question":"Haluatko poistaa tallenteen {
soundName}
?"}
,"empty":{
"noSounds":"Ei yhteensopivia tallenteita löydetty polusta {
path}
. Tuettuja tiedostotyyppejä ovat mp3, wav, flac","noFavorites":"Sinulla ei täl
lä hetkellä ole suosikkeja. Lisää tallenteita suosikiksi näyttääksesi ne 
tässä","nothingToShow":"Ei näytettävää"}
,"favorites":{
"title":"Suosikit","favorite":"Suosikki"}
,"settings":{
"tabHotkeysOnly":"Pikanäppäimet vain nykyiselle välilehdelle","viewMode":{
"listView":"Listanäkymä","launchpadMode":"Emuloitu Launchpad","title":"Näkym�
�","gridView":"Ruudukkonäkymä"}
,"allowOverlapping":"Salli äänien lomitus","minimizeToTray":"Piilota ilmaisina
lueelle","muteDuringPlayback":"Mykistä mikrofoni toiston ajaksi","theme":{
"system":"Järjestelmän oletus","dark":"Tumma","title":"Teema","light":"Vaalea"
}
,"audioBackend":"Äänipalvelin","allowMultipleOutputs":"Salli useampi ulostulo-
ohjelma","stopHotkey":"Pysäytyspikanäppäin","title":"Asetukset","deleteToTras
h":"Poista roskakoriin","useAsDefaultDevice":"Käytä oletuslaitteena","pushToTa
lkKeys":"Puhepikanäppäimet","language":"Kielen ohitus"}
,"tray":{
"show":"Näytä ikkuna","hide":"Piilota ikkuna","exit":"Poistu"}
,"customVolume":{
"context":"Aseta oma äänenvoimakkuus","setFor":"Aseta äänen {
soundName}
 voimakkuus"}
,"noAudioBackend":{
"title":"Äänipalvelinta ei lödetty","notDetected":"Emme löytäneet tuettua �
�änipalvelinta järjestelmästäsi.","choose":"Ole hyvä ja valitse alhaalta"}
,"hotkeys":{
"hotkey":"Pikanäppäin","title":"Aseta pikanäppäin","setFor":"Aseta pikanäpp
äin äänelle {
soundName}
"}
,"input":{
"shift":"Vaihto","enter":"Rivinvaihto","leftClick":"Hiiren vasen painike","right
Click":"Hiiren oikea painike","arrowKeys":"Nuolinäppäimet","space":"Välilyön
ti","ctrl":"CTRL"}
,"help":{
"title":"Apua","search":{
"text":"Paina {
ctrl}
 + {
f}
 aktivoidaksesi hakutoiminnon","search":"etsi"}
,"play":{
"text":"{
leftClick}
 toistaaksesi","play":"toista"}
,"options":{
"moreOptions":"näytä lisää asetuksia","text":"{
rightClick}
 näyttääksesi lisää asetuksia"}
,"togglePlayback":{
"text":""}
}
}
')}
,"5c0b":function(e,t,a){
"use strict";
a("9c0c")}
,"5e7c":function(e,t,a){
"use strict";
a("6592")}
,"62ea":function(e){
e.exports=JSON.parse('{
"welcome":{
"linuxDetected":"Ми виявили, що Ви використовуєте Lin
ux.","linuxGuide1":"Для того, щоб програвати звуки, В�
�м потрібно вибрати додаток виводу у верхнь�
�му правому кутку.","windowsGuide1":"Переконайтесь, �
�о виконуєте кроки встановлення","title":"Ласка�
�о просимо до {
programName}
","noTabs":"На даний момент Ви не маєте відкритих
 вкладок. Додайте одну, натиснувши {
addTab}
 справа","windowsGuide2":"як показано на нашому сайт
і","windowsDetected":"Ми виявили, що Ви використовуєт
е Windows.","linuxGuide2":"Вам не потрібно змінювати св
ої пристрої введення та виводу будь-де."}
,"outputApp":"Додаток виводу","actions":{
"openFolder":"Відкрити папку","appPassThrough":"Пропустит�
� крізь","playlistMode":"Режим плейлисту","shuffle":"Пере
мішати","reloadSounds":"Перезавантажити","no":"Ні","on":"
Включити","stop":"Зупинити","refresh":"Оновити","play":"�
�рати","off":"Виключити","search":"Пошук","yes":"Так","conf
irmation":"Підтвердження","ignore":"Ігнорувати","dismiss"
:"Відхилити","addTab":"Додати вкладку"}
,"errors":{
"0":"Не вдалося програти","1":"Не вдалося знайти
","2":"Не вдалося зупинити","3":"Не вдалося повто
рити","4":"Не вдалося відновити","5":"Не вдалося 
переміститися до виходу","6":"Звук не знайден�
�","7":"Папка не існує","8":"Вкладка не існує","9":"Н
е вдалося встановити гарячу клавішу","10":"Не �
�далося перенаправлення","11":"Не вдалося пере
йти назад","12":"Не вдалося повернути перенапр
авлення","13":"Не вдалося повернути джерело за
 замовчуванням","14":"Не вдалося встановити дж
ерело за замовчуванням","15":"youtube-dl не знайден
","16":"Недійсний URL","17":"Не вдалося розібрати you
tube-dl JSON","18":"Невідома помилка youtube-dl","19":"Не вд�
�лося видалити цей файл","20":"Не вдалося вимкн
ути звук","21":"Не вдалося встановити користув
альницьку гучність","error":"Помилка","backendFunctionMi
ssing":"Відсутня функція сервера: {
functionName}
"}
,"windows":{
"administrativePrivilegesNeeded":"Необхідні привілеї адмін
істратора!","restartAsAdmin":"Перезавантажити як ад�
�іністратор","detectedMisconfiguration":"Виявлено неправ
ильну конфігурацію з VB-Cable","setUpNow":"Налаштува�
�и зараз","badConfiguration":"Виявлено неправильну ко
нфігурацію","virtualAudioCableMisconfiguration":"Ми виявили, 
що ваш Virtual Audio Cable не налаштований належним �
�ином.","selectMic":"Виберіть свій мікрофон і прод�
�вжуйте","automaticSetup":"Автоматичне налаштування
"}
,"outputDevice":"Пристрій виводу","favorites":{
"title":"Улюблені","favorite":"Улюблене"}
,"deleteSound":{
"delete":"Видалити","question":"Ви б хотіли видалити з
вук {
soundName}
?"}
,"empty":{
"noFavorites":"Наразі у Вас немає улюблених звуків
. Додайте звуки до улюблених, щоб вони відоб�
�азилися тут","nothingToShow":"Нічого показати","noSound
s":"У папці {
path}
 не знайдено сумісних звуків. Підтримувані �
�ормати файлів: mp3, wav, flac"}
,"settings":{
"deleteToTrash":"Видалити до сміття","title":"Налаштува
ння","theme":{
"title":"Тема","system":"Система","dark":"Темна","light":"Сві
тла"}
,"audioBackend":"Сервер звуку","pushToTalkKeys":"Клавіша «Н�
�тисни і говори»","allowMultipleOutputs":"Дозволити кіл
ька вихідних додатків","stopHotkey":"Зупинити гар�
�чу клавішу","tabHotkeysOnly":"Гарячі клавіші лише д�
�я поточної вкладки","viewMode":{
"title":"Режим перегляду","listView":"Вид список","gridVi
ew":"Вид сітки","launchpadMode":"Емульований Launchpad"}
,"allowOverlapping":"Дозволити перекриття звуку","minimi
zeToTray":"Згорнути в системний трей","useAsDefaultDevice"
:"Використовувати як пристрій за замовчуван
ням","muteDuringPlayback":"Вимкнути мікрофон під час в
ідтворення","language":"Перевизначення мови"}
,"removeTab":{
"question":"Ви б хотіли видалити вкладку {
tabName}
?"}
,"input":{
"space":"Пробіл","arrowKeys":"Клавіші зі стрілками","ctr
l":"CTRL","shift":"Shift","enter":"Enter","leftClick":"ЛКМ","rightClick":"П�
�М"}
,"search":{
"typeToSearch":"Введіть для пошуку","noResultsFound":"Нічог
о не знайдено","changeSelection":"{
arrowKeys}
, щоб змінити вибір","jumpToSelected":"{
enter}
, щоб перейти до вибраного звуку","playSelected":"{
shift}
 + {
enter}
 для відтворення вибраного звуку"}
,"help":{
"options":{
"text":"{
rightClick}
, щоб {
moreOptions}
","moreOptions":"показати більше параметрів"}
,"reloadSounds":{
"reload":"перезавантажити поточну вкладку","text":"
Натисніть кнопку {
ctrl}
 + {
r}
 для {
reload}
"}
,"visitOurWebsite":"Відвідайте наш веб-сайт","title":"Доп
омога","search":{
"text":"Натисніть {
ctrl}
 + {
f}
, щоб {
search}
","search":"шукати"}
,"play":{
"text":"{
leftClick}
, щоб {
play}
","play":"грати"}
,"togglePlayback":{
"text":"Натисніть {
space}
, щоб {
playPause}
","playPause":"призупинити/відновити відтворення 
поточних звуків"}
,"appPassThrough":{
"text":"Натисніть {
ctrl}
 + {
g}
, щоб {
show}
","show":"показати програми для перенаправленн�
�"}
,"supportUs":"Підтримайте нас","joinOurDiscord":"Приєднуй�
�есь до нашого Discord","viewSourceCode":"Перегляд прогр
амний код"}
,"hotkeys":{
"setFor":"Встановити гарячу клавішу для {
soundName}
","title":"Встановити гарячу клавішу","hotkey":"Гаря�
�а клавіша"}
,"update":{
"latestVersion":"Остання версія","title":"Доступно онов
лення!","ignore":"Ігнорувати","yourVersion":"Ваша версі�
�","updateNow":"Оновити зараз"}
,"systemInfo":{
"title":"Інформація про систему","description":"Прикрі
піть цю інформацію під час створення звіту �
�ро помилку","copyToClipboard":"Копіювати в буфер обм
іну"}
,"downloader":{
"placeholder":"Введіть посилання","title":"Завантажув�
�ч","notAvailable":"{
youtube-dl}
 та/або {
ffmpeg}
 не встановлено","installNow":"Встановити зараз","pr
ogress":"Прогрес","converting":"Перетворення","eta":"розр
ахунковий час завершення","cancelDownload":"Скасува
ти завантаження","startDownload":"Почати завантаже�
�ня","success":"Успішно завантажено: {
title}
","close":"Закрити"}
,"tray":{
"show":"Показати вікно","hide":"Приховати вікно","exi
t":"Вийти"}
,"customVolume":{
"context":"Встановити власну гучність","setFor":"Уст�
�новити гучність для {
soundName}
"}
,"noAudioBackend":{
"title":"Сервер звуку не знайдено","notDetected":"Не вд
алося виявити підтримуваний аудіо-сервер д�
�я вашої системи.","choose":"Будь ласка, виберіть 
одну з наведених нижче"}
,"volume":{
"local":"Локальна гучність","remote":"Віддалена гуч�
�ість","sync":"Синхронізація гучності"}
,"appPassThrough":{
"title":"Перенаправлення додатків","noAppsFound":"Не з
найдено програм","noOutputSelected":"Потрібно вибрат
и вихідну програму"}
,"sort":{
"title":"Сортувати","modifiedAscending":"За зростанням","mo
difiedDescending":"За спаданням","alphabeticalAscending":"За алф
авітним зростанням","alphabeticalDescending":"За алфаві
тним спаданням"}
}
')}
,6592:function(e,t,a){
}
,"6ce2":function(e){
e.exports=JSON.parse('{
"welcome":{
"title":"Willkommen zu {
programName}
","noTabs":"Zurzeit sind keine Tabs vorhanden. Fügen Sie einen hinzu, indem Sie
 {
addTab}
 auf der rechten Seite klicken","linuxDetected":"Wir haben festgestellt, dass Si
e Linux benutzen.","linuxGuide1":"Um Sounds abzuspielen, müssen Sie nur die Aus
gabe-Anwendung oben rechts auswählen.","linuxGuide2":"Sie müssen Ihr Ein- oder
 Ausgabegerät nirgends ändern.","windowsDetected":"Wir haben festgestellt, das
s Sie Windows benutzen.","windowsGuide1":"Beachten Sie unbedingt die Installatio
nsschritte, {
seenOnWebsite}
","windowsGuide2":"die auf unserer Website angegeben sind"}
,"outputApp":"Ausgabe-Anwendung","outputDevice":"Ausgabe-Gerät","actions":{
"refresh":"Aktualisieren","stop":"Stopp","search":"Suche","addTab":"Tab hinzufü
gen","reloadSounds":"Neu laden","play":"Abspielen","appPassThrough":"Durchreiche
n","playlistMode":"Playlist-Modus","yes":"Ja","no":"Nein","on":"An","off":"Aus",
"shuffle":"Zufall","confirmation":"Bestätigung","openFolder":"Ordner öffnen","
ignore":"Ignorieren","dismiss":"Verwerfen"}
,"removeTab":{
"question":"Möchten Sie den Tab {
tabName}
 entfernen?"}
,"deleteSound":{
"delete":"Löschen","question":"Möchten Sie den Sound {
soundName}
 löschen?"}
,"empty":{
"nothingToShow":"Nichts gefunden","noSounds":"Keine kompatiblen Sounds im Ordner
 {
path}
 gefunden. Unterstützte Dateiformate sind mp3, wav, flac","noFavorites":"Sie ha
ben derzeit keine Favoriten. Favorisieren Sie ein paar Sounds, um sie hier anzuz
eigen"}
,"favorites":{
"title":"Favoriten","favorite":"Favorit"}
,"settings":{
"title":"Einstellungen","tabHotkeysOnly":"Hotkeys nur für aktuellen Tab","viewM
ode":{
"title":"Anzeige-Modus","listView":"Listenansicht","gridView":"Rasteransicht","l
aunchpadMode":"Emuliertes Launchpad"}
,"allowOverlapping":"Tonüberlappung zulassen","deleteToTrash":"In den Papierkor
b löschen","minimizeToTray":"In den Systemtray minimieren","useAsDefaultDevice"
:"Als Standardgerät verwenden","muteDuringPlayback":"Mikrofon stumm schalten w�
�hrend dem Abspielen","theme":{
"title":"Design","system":"System","dark":"Dunkel","light":"Hell"}
,"audioBackend":"Audio-Backend","allowMultipleOutputs":"Erlaube mehrere Ausgabe-
Anwendungen","stopHotkey":"Stopp-Hotkey","pushToTalkKeys":"Push-to-talk Tasten",
"language":"Sprache überschreiben"}
,"tray":{
"show":"Fenster anzeigen","hide":"Fenster verstecken","exit":"Beenden"}
,"customVolume":{
"context":"Benutzerdefinierte Lautstärke setzen","setFor":"Setze Lautstärke f�
�r {
soundName}
"}
,"noAudioBackend":{
"title":"Kein Audio-Backend gefunden","notDetected":"Wir konnten kein unterstüt
ztes Audio-Backend für Ihr System finden.","choose":"Bitte wählen Sie unten ei
nes aus"}
,"hotkeys":{
"title":"Hotkey setzen","hotkey":"Hotkey","setFor":"Setze Hotkey für {
soundName}
"}
,"input":{
"ctrl":"STRG","shift":"Umschalt","enter":"Enter","leftClick":"Linksklick","right
Click":"Rechtsklick","arrowKeys":"Pfeiltasten","space":"Leertaste"}
,"help":{
"title":"Hilfe","search":{
"text":"Drücke {
ctrl}
 + {
f}
 um zu {
search}
","search":"suchen"}
,"play":{
"text":"{
leftClick}
 um {
play}
","play":"abzuspielen"}
,"options":{
"text":"{
rightClick}
 um {
moreOptions}
","moreOptions":"mehr Optionen anzuzeigen"}
,"togglePlayback":{
"text":"Drücke {
space}
 um {
playPause}
","playPause":"die aktuell spielenden Töne zu pausieren/fortzusetzen"}
,"appPassThrough":{
"text":"Drücke {
ctrl}
 + {
g}
 um {
show}
","show":"App durchreichen anzuzeigen"}
,"reloadSounds":{
"text":"Drücke {
ctrl}
 + {
r}
 um {
reload}
","reload":"den aktuellen Tab neu zu laden"}
,"supportUs":"Unterstütze uns","visitOurWebsite":"Besuche unsere Webseite","joi
nOurDiscord":"Betrete unseren Discord","viewSourceCode":"Schaue den Quellcode an
"}
,"volume":{
"local":"Lokale Lautstärke","remote":"Ausgabe Lautstärke","sync":"Lautstärken
 synchronisieren"}
,"appPassThrough":{
"title":"Anwendung durchreichen","noAppsFound":"Keine Anwendungen gefunden","noO
utputSelected":"Sie müssen eine Ausgabeanwendung gewählt haben"}
,"search":{
"typeToSearch":"Tippe zum Suchen","noResultsFound":"Keine Ergebnisse gefunden","
changeSelection":"{
arrowKeys}
, um Auswahl zu ändern","jumpToSelected":"{
enter}
, um zum ausgewählten Ton zu springen","playSelected":"{
shift}
 + {
enter}
, um den ausgewählten Ton abzuspielen"}
,"sort":{
"title":"Sortieren","modifiedAscending":"Geändert aufsteigend","modifiedDescend
ing":"Geändert absteigend","alphabeticalAscending":"Alphabetisch aufsteigend","
alphabeticalDescending":"Alphabetisch absteigend"}
,"downloader":{
"title":"Downloader","notAvailable":"{
youtube-dl}
 und/oder {
ffmpeg}
 sind nicht installiert","installNow":"Jetzt installieren","placeholder":"Geben 
Sie einen Link ein","progress":"Fortschritt","converting":"Konvertiere","eta":"E
TA","cancelDownload":"Download abbrechen","startDownload":"Download starten","su
ccess":"Erfolgreich heruntergeladen: {
title}
","close":"Schließen"}
,"update":{
"title":"Eine Aktualisierung ist verfügbar!","yourVersion":"Ihre Version","late
stVersion":"Neueste Version","updateNow":"Jetzt aktualisieren","ignore":"Ignorie
ren"}
,"systemInfo":{
"title":"System-Informationen","description":"Hängen Sie diese Informationen an
, wenn Sie einen Fehler melden","copyToClipboard":"In die Zwischenablage kopiere
n"}
,"windows":{
"detectedMisconfiguration":"Eine Fehlkonfiguration bei VB-Cable wurde erkannt","
setUpNow":"Jetzt einrichten","badConfiguration":"Falsche Konfiguration erkannt",
"virtualAudioCableMisconfiguration":"Wir haben festgestellt, dass Ihr Virtual Au
dio Cable nicht richtig eingerichtet ist.","selectMic":"Bitte wählen Sie Ihr Mi
krofon und fahren Sie fort","automaticSetup":"Automatisch einrichten","administr
ativePrivilegesNeeded":"Administrative Rechte benötigt!","restartAsAdmin":"Neus
tart als Admin"}
,"errors":{
"0":"Wiedergabe fehlgeschlagen","1":"Spulen fehlgeschlagen","2":"Pausieren fehlg
eschlagen","3":"Repeat fehlgeschlagen","4":"Fortsetzen fehlgeschlagen","5":"Vers
chieben auf den Sink fehlgeschlagen","6":"Sound nicht gefunden","7":"Ordner exis
tiert nicht","8":"Tab existiert nicht","9":"Hotkey konnte nicht gesetzt werden",
"10":"Starten des durchreichen fehlgeschlagen","11":"Zurückstellen fehlgeschlag
en","12":"Zurückstellen des durchreichen fehlgeschlagen","13":"Standardgerät z
urücksetzen fehlgeschlagen","14":"Standardgerät setzen fehlgeschlagen","15":"y
outube-dl nicht gefunden","16":"Ungültige URL","17":"Konnte youtube-dl JSON nic
ht verarbeiten","18":"Unbekanntes youtube-dl Versagen","19":"Konnte Datei nicht 
löschen","20":"Konnte nicht stumm schalten","21":"Konnte benutzerdefinierte Lau
tstärke nicht setzen","error":"Fehler","backendFunctionMissing":"Backend-Funkti
on fehlt: {
functionName}
"}
}
')}
,"74bb":function(e,t,a){
"use strict";
a("d873")}
,7704:function(e){
e.exports=JSON.parse('{
"errors":{
"0":"Не удалось проиграть","1":"Не удалось найти
","2":"Не удалось приостановить","3":"Не удалось 
повторить","4":"Не удалось возобновить","5":"Не �
�далось переместиться к выходы","6":"Звук не н�
�йден","7":"Папка не существует","8":"Вкладка не �
�уществует","9":"Не удалось установить горячу�
� клавишу","10":"Не удалось перенаправить","11":"Н
е удалось вернуться назад","12":"Не удалось ве�
�нуть перенаправленные","13":"Не удалось верну
ть источник по умолчанию","14":"Не удалось уст�
�новить источник по умолчанию","15":"youtube-dl не н
айден","16":"Неверный URL","17":"Не удалось разобра
ть youtube-dl JSON","18":"Неизвестная ошибка youtube-dl","19"
:"Не удалось удалить файл","20":"Не удалось заг�
�ушить","21":"Не удалось установить пользовате
льскую громкость","error":"Ошибка","backendFunctionMissing"
:"Бэкенд функция отсутствует: {
functionName}
"}
,"help":{
"viewSourceCode":"Посмотреть исходный код","visitOurWebsite
":"Посетите наш сайт","search":{
"search":"поиск","text":"Нажмите {
ctrl}
 + {
f}
 для поиска"}
,"title":"Помощь","joinOurDiscord":"Присоединяйтесь к на
шему Discord","supportUs":"Поддержать нас","reloadSounds":{
"reload":"перезагрузить текущую вкладку","text":"На
жмите {
ctrl}
 + {
r}
 чтобы {
reload}
"}
,"appPassThrough":{
"text":"Нажмите {
ctrl}
 + {
g}
 чтобы {
show}
","show":"показать приложения для перенаправле�
�ия"}
,"togglePlayback":{
"playPause":"приостановить/продолжить воспроизв�
�дение звука","text":"Нажмите {
space}
 чтобы {
playPause}
"}
,"options":{
"moreOptions":"показать больше опций","text":"{
rightClick}
 для {
moreOptions}
"}
,"play":{
"text":"{
leftClick}
 для {
play}
","play":"играть"}
}
,"settings":{
"title":"Настройки","allowMultipleOutputs":"Разрешить неск
олько приложений для вывода","audioBackend":"Аудио 
бэкэнд","theme":{
"light":"Светлая","dark":"Тёмная","system":"Система","title"
:"Тема"}
,"muteDuringPlayback":"Заглушать микрофон во время пр�
�игрывания","useAsDefaultDevice":"Использовать как ус�
�ройство по умолчанию","minimizeToTray":"Свернуть в �
�истемный трей","deleteToTrash":"Удалить в корзину","
allowOverlapping":"Разрешить наложение звуков","tabHotke
ysOnly":"Горячие клавиши только для текущей вкл
адки","stopHotkey":"Горячая клавиша \\"Стоп\\"","viewMode"
:{
"gridView":"Плитка","listView":"Список","title":"Режим прос
мотра","launchpadMode":"Эмулированная панель запус�
�а"}
,"language":"Переопределение языка"}
,"actions":{
"reloadSounds":"Перезагрузить","addTab":"Добавить вкла�
�ку","search":"Поиск","stop":"Остановить","refresh":"Обнов
ить","dismiss":"Отклонить","ignore":"Игнорировать","open
Folder":"Открыть папку","confirmation":"Подтверждение",
"shuffle":"Перемешать","off":"Выключить","on":"Включит
ь","no":"Нет","yes":"Да","playlistMode":"Режим плейлиста","p
lay":"Играть","appPassThrough":"Перенаправление"}
,"welcome":{
"title":"Добро пожаловать в {
programName}
","windowsGuide2":"как показано на нашем сайте","windowsG
uide1":"Обязательно следуйте инструкциям по ус
тановке {
seenOnWebsite}
","windowsDetected":"Мы обнаружили что вы использует�
� Windows.","linuxGuide2":"Вы не должны менять устройст�
�о ввода или вывода где либо.","linuxGuide1":"Чтобы �
�роиграть звук вы должны выбрать приложение
 в правом верхнем углу.","linuxDetected":"Мы обнаруж�
�ли что вы используете Linux.","noTabs":"Сейчас нет �
�ткрытых вкладок. Добавьте новую вкладку, с �
�омощью кнопки {
addTab}
 справа"}
,"windows":{
"restartAsAdmin":"Перезапустить от имени администр�
�тора","selectMic":"Пожалуйста, выберите свой микр
офон и продолжите","virtualAudioCableMisconfiguration":"Мы об
наружили что ваш Virtual Audio Cable не настроен дол�
�ным образом.","badConfiguration":"Обнаружена неправи
льная конфигурация","detectedMisconfiguration":"Обнаруж�
�на некорректная настройка VB-Cable","administrativePrivi
legesNeeded":"Необходимы права администратора!","se
tUpNow":"Настроить сейчас","automaticSetup":"Автоматиче
ская настройка"}
,"systemInfo":{
"copyToClipboard":"Копировать в буфер обмена","description
":"Прикрепите эту информацию при создании со
общения об ошибке","title":"Информация о систем�
�"}
,"update":{
"ignore":"Игнорировать","updateNow":"Обновить сейчас",
"latestVersion":"Последняя версия","yourVersion":"Ваша вер
сия","title":"Доступно обновление!"}
,"downloader":{
"close":"Закрыть","success":"Успешно загружен: {
title}
","startDownload":"Начать загрузку","cancelDownload":"Отмени
ть загрузку","eta":"расчётное время завершения
","converting":"Конвертирование","progress":"Прогресс","p
laceholder":"Введите ссылку","installNow":"Установить с�
�йчас","notAvailable":"{
youtube-dl}
 и/или {
ffmpeg}
 не установлены","title":"Загрузчик"}
,"sort":{
"alphabeticalDescending":"По алфавиту по убыванию","alphabet
icalAscending":"По алфавиту по возрастанию","title":"Со
ртировать","modifiedAscending":"По возврастанию","modifie
dDescending":"По убыванию"}
,"search":{
"changeSelection":"{
arrowKeys}
 для изменения выбора","noResultsFound":"Результаты 
не найдены","typeToSearch":"Введите для поиска","jumpTo
Selected":"{
enter}
 для перехода к выбранному в данный момент з
вуку","playSelected":"{
shift}
 + {
enter}
 для воспроизведения текущего выбранного з�
�ука"}
,"appPassThrough":{
"noAppsFound":"Приложения не найдены","noOutputSelected":"В�
� должны выбрать приложение для вывода","title":
"Перенаправления приложений"}
,"volume":{
"sync":"Связать громкость","remote":"Удалённый уров
ень громкости","local":"Локальный уровень громк
ости"}
,"input":{
"space":"Пробел","arrowKeys":"Стрелки","rightClick":"ПКМ","leftC
lick":"ЛКМ","enter":"Enter","shift":"Shift","ctrl":"CTRL"}
,"hotkeys":{
"setFor":"Задать горячую клавишу для {
soundName}
","hotkey":"Горячая клавиша","title":"Установить гор�
�чую клавишу"}
,"noAudioBackend":{
"notDetected":"Мы не смогли обнаружить поддержива�
�мый аудио бэкэнд в вашей системе.","title":"Ауди
о бэкэнд не найден","choose":"Пожалуйста, выбери�
�е один ниже"}
,"tray":{
"exit":"Выйти","hide":"Свернуть окно","show":"Показать 
окно"}
,"favorites":{
"title":"Избранные","favorite":"Избранное"}
,"empty":{
"noFavorites":"Сейчас у вас нет избранных звуков. Д
обавьте в избранные немного звуков, чтобы о�
�и отображались здесь","noSounds":"В папке не найд
ено поддерживаемых звуков {
path}
. Поддерживаемые форматы: mp3, wav, flac","nothingToShow":"
Тут пусто"}
,"deleteSound":{
"question":"Вы хотите удалить звук {
soundName}
?","delete":"Удалить"}
,"outputDevice":"Устройство вывода","customVolume":{
"setFor":"Установить громкость для {
soundName}
","context":"Установить индивидуальный уровень г
ромкости"}
,"removeTab":{
"question":"Вы хотите удалить вкладку {
tabName}
?"}
,"outputApp":"Выходное приложение"}
')}
,8122:function(e,t,a){
}
,"89b2":function(e){
e.exports=JSON.parse('{
"actions":{
"reloadSounds":"Przeładuj","playlistMode":"Tryb listy odtwarzania","refresh":"O
dśwież","search":"Szukaj","yes":"Tak","no":"Nie","openFolder":"Otwórz folder"
,"shuffle":"Losuj kolejność","confirmation":"Potwierdzenie","ignore":"Zignoruj
","dismiss":"Odrzuć","appPassThrough":"Przekaz do aplikacji","on":"Włączony",
"stop":"Zatrzymaj","addTab":"Dodaj zakładkę","play":"Odtwórz","off":"Wyłącz
ony"}
,"hotkeys":{
"title":"Ustaw skrót klawiszowy","setFor":"Ustaw skrót klawiszowy dla {
soundName}
","hotkey":"Skrót klawiszowy"}
,"welcome":{
"linuxGuide2":"Nie musisz zmieniać w żadnej aplikacji urządzenia wejścia lub
 wyjścia.","linuxDetected":"Zauważyliśmy, że korzystasz z systemu operacyjne
go Linux.","noTabs":"Brak zakładek. Utwórz nową, klikając {
addTab}
 po prawej stronie","windowsGuide2":"znajdującymi się na naszej stronie","wind
owsGuide1":"Podążaj za instrukcjami instalacji, {
seenOnWebsite}
","title":"Witaj w {
programName}
","linuxGuide1":"Aby odtwarzać dźwięki, wybierz aplikację wyjścia w prawym 
górnym rogu.","windowsDetected":"Zauważyliśmy, że korzystasz z systemu opera
cyjnego Windows."}
,"deleteSound":{
"delete":"Usuń","question":"Czy chcesz usunąć dźwięk {
soundName}
?"}
,"empty":{
"noSounds":"Brak kompatybilnych plików dźwiękowych w folderze {
path}
. Wspierane formaty plików to mp3, wav, flac","nothingToShow":"Nie ma nic do po
kazania","noFavorites":"Nie masz swoich ulubionych dźwięków. Wybierz kilka z 
nich, które chciałbyś tu umieścić"}
,"settings":{
"minimizeToTray":"Zminimalizuj do paska systemowego","useAsDefaultDevice":"Użyj
 jako urządzenia domyślnego","muteDuringPlayback":"Wycisz mikrofon podczas odt
warzania dźwięku","theme":{
"title":"Motyw","system":"Systemowy","dark":"Ciemny","light":"Jasny"}
,"title":"Ustawienia","tabHotkeysOnly":"Skróty klawiszowe tylko dla wybranej za
kładki","viewMode":{
"title":"Tryb widoku","listView":"Widok listy","gridView":"Widok siatki","launch
padMode":"Emulowany Launchpad"}
,"allowOverlapping":"Zezwól na nakładanie się dźwięków","deleteToTrash":"U
suwając, przenoś pliki do kosza","audioBackend":"Backend audio","allowMultiple
Outputs":"Zezwól na wybranie wielu aplikacji wyjścia","stopHotkey":"Skrót kla
wiszowy: Stop","language":"Wymuś język","pushToTalkKeys":"Skrót klawiszowy: P
ush-To-Talk"}
,"customVolume":{
"context":"Ustaw niestandardową głośność","setFor":"Ustaw głośność dla 
{
soundName}
"}
,"tray":{
"show":"Pokaż okno","hide":"Ukryj okno","exit":"Wyjdź"}
,"removeTab":{
"question":"Czy chcesz usunąć etykietę {
tabName}
?"}
,"outputApp":"Aplikacja wyjścia","outputDevice":"Urządzenie wyjścia","noAudio
Backend":{
"title":"Nie znaleziono żadnego backendu audio","notDetected":"Nie mogliśmy wy
kryć wspieranego backendu audio dla twojego systemu.","choose":"Wybierz jedno z
 poniższych"}
,"favorites":{
"favorite":"Dodaj do ulubionych","title":"Ulubione"}
,"volume":{
"sync":"Zszynchronizuj poziomy głośności","local":"Głośność lokalna","rem
ote":"Głośność wyjściowa"}
,"search":{
"noResultsFound":"Brak wyników","changeSelection":"Wciśnij {
arrowKeys}
 aby zmienić zaznaczenie","typeToSearch":"Wpisz aby wyszukać","jumpToSelected"
:"Wciśnij {
enter}
 aby przejść do obecnie wybranego dźwięku","playSelected":"Wciśnij {
shift}
 + {
enter}
 aby odtworzyć obecnie wybrany dźwięk"}
,"downloader":{
"notAvailable":"{
youtube-dl}
 i/lub {
ffmpeg}
 nie są zainstalowane","installNow":"Zainstaluj teraz","placeholder":"Wprowadź
 link","progress":"Postęp","converting":"Konwertowanie","eta":"Pozostały czas 
do końca","cancelDownload":"Anuluj Pobieranie","title":"Pobieracz","startDownlo
ad":"Rozpocznij pobieranie","success":"Pomyślnie pobrano: {
title}
","close":"Zamknij"}
,"input":{
"ctrl":"CTRL","enter":"Enter","leftClick":"Lewy przycisk myszy","rightClick":"Pr
awy przycisk myszy","arrowKeys":"Strzałki","space":"Spacja","shift":"Shift"}
,"help":{
"title":"Pomoc","search":{
"text":"Wciśnij {
ctrl}
 + {
f}
 aby {
search}
","search":"otworzyć menu wyszukiwania"}
,"play":{
"text":"Wciśnij {
leftClick}
 aby {
play}
","play":"odtworzyć dźwięk"}
,"togglePlayback":{
"text":"Wciśnij {
space}
 aby {
playPause}
","playPause":"zapauzować/wznowić odtwarzanie dźwięków"}
,"appPassThrough":{
"text":"Wciśnij {
ctrl}
 + {
g}
 aby {
show}
","show":"pokazać menu przekazu do aplikacji"}
,"reloadSounds":{
"text":"Wciśnij {
ctrl}
 + {
r}
 aby {
reload}
","reload":"przeładować obecną etykietę"}
,"supportUs":"Wesprzyj nas","visitOurWebsite":"Odwiedź naszą stronę","joinOur
Discord":"Dołącz do naszego serwera Discord","viewSourceCode":"Wyświetl kod �
�ródłowy","options":{
"moreOptions":"pokazać więcej opcji","text":"Wciśnij {
rightClick}
 aby {
moreOptions}
"}
}
,"appPassThrough":{
"title":"Przekaz do aplikacji","noOutputSelected":"Musisz mieć wybraną aplikac
ję wyjścia","noAppsFound":"Nie znaleziono żadnych aplikacji"}
,"sort":{
"modifiedAscending":"Czas modyfikacji - rosnąco","modifiedDescending":"Czas mod
yfikacji - malejąco","alphabeticalAscending":"Alfabetycznie - rosnąco","alphab
eticalDescending":"Alfabetycznie - malejąco","title":"Sortuj"}
,"update":{
"title":"Dostępna nowa aktualizacja!","yourVersion":"Twoja wersja","latestVersi
on":"Najnowsza wersja","updateNow":"Zaktualizuj","ignore":"Zignoruj"}
,"systemInfo":{
"title":"Informacje o systemie","description":"Dodaj te informacje do zgłoszeni
a o błędzie","copyToClipboard":"Skopiuj do schowka"}
,"windows":{
"administrativePrivilegesNeeded":"Wymagane uprawnienia administratora!","detecte
dMisconfiguration":"Wykryto błędną konfigurację VB-Cable","setUpNow":"Ustaw 
teraz","badConfiguration":"Wykryto błędną konfigurację","virtualAudioCableMi
sconfiguration":"Wykryliśmy problemy z ustawieniami twojego Virtual Audio Cable
.","selectMic":"Wybierz mikrofon i przejdź dalej","automaticSetup":"Automatyczn
ie ustaw","restartAsAdmin":"Zrestartuj z uprawnieniami administratora"}
,"errors":{
"0":"Nie udało się odtworzyć dźwięku","1":"Nie udało się przewinąć","2"
:"Nie udało się wstrzymać odtwarzania dźwięku","3":"Nie udało się zapętl
ić dźwięku","4":"Nie udało się wznowić odtwarzania dźwięku","5":"Nie uda
ło się przenieść dźwięku do wyjścia","6":"Nie znaleziono dźwięku","7":"
Folder nie istnieje","8":"Etykieta nie istnieje","9":"Nie udało się ustawić s
krótu klawiszowego","10":"Nie udało się zacząć przekazu do aplikacji","11":
"Nie udało się cofnąć","12":"Nie udało się cofnąć przekazu do aplikacji"
,"13":"Nie udało się cofnąć domyślnego źródła","14":"Nie udało się ust
awić domyślnego źródła","15":"Nie znaleziono youtube-dl","16":"Niepoprawny 
URL","17":"Nie udało się zinterpretować pliku JSON youtube-dl","18":"Nieznany
 błąd youtube-dl","19":"Nie udało się usunąć pliku","20":"Nie udało się 
wyciszyć dźwięku","21":"Nie udało się ustawić niestandardowej głośności
","error":"Błąd","backendFunctionMissing":"Brak funkcji backendu: {
functionName}
"}
}
')}
,"8f3e":function(e,t,a){
e.exports=a.p+"img/undraw_Taken_re_yn20.d2b34b56.svg"}
,9542:function(e){
e.exports=JSON.parse('{
"settings":{
"audioBackend":"Platformă audio","theme":{
"light":"Luminat","dark":"Întunecat","system":"Sistem","title":"Temă"}
,"viewMode":{
"listView":"Vizualizare listă","title":"Modul de vizualizare","launchpadMode":"
Launchpad emulat","gridView":"Vizualizare în grilă"}
,"title":"Setări","useAsDefaultDevice":"Folosiți ca microfonul implicit","push
ToTalkKeys":"Butoane apasă-ca-să-vorbești","language":"Limba forțată","stop
Hotkey":"Tastă de oprit sunetul","allowMultipleOutputs":"Lasă mai multe aplica
ții de ieșire","muteDuringPlayback":"Puneți microfonul pe mut când este pus�
� muzică","minimizeToTray":"Micește la margine","deleteToTrash":"Țîpă la co
șul de gunoi","allowOverlapping":"Permite sunete unele peste altele","tabHotkey
sOnly":"Scurtături doar pentru fereastra asta,"}
,"customVolume":{
"setFor":"Setați volumul pentru {
soundName}
","context":"Setați volumul personalizat"}
,"tray":{
"exit":"Ieșire","hide":"Ascunde fereastra","show":"Arată fereastra"}
,"systemInfo":{
"title":"Informatii despre sistem","copyToClipboard":"Copiază","description":"S
pune informația asta cand scrii un bug report"}
,"welcome":{
"title":"Bun venit la {
programName}
","windowsGuide2":"ca pe site","windowsGuide1":"Fă-te sigur(ă) că folosești 
instrucțiunile {
seenOnWebsite}
","windowsDetected":"Am detectat că folosești Windows.","linuxGuide2":"Nu treb
uie să schimbi dispozitivul de intrare sau ieșire.","linuxGuide1":"Ca să porn
ești sunete, trebuie doar să alegi aplicația unde vrei să sune.","linuxDetec
ted":"Am detectat că folosești Linux.","noTabs":"Deocamdată nu sunt ferestre,
 adaugă una dând click pe {
addTab}
 de pe partea dreaptă"}
,"errors":{
"0":"Nu s-a putut reda","1":"Nu s-a putut căuta","2":"Nu s-a putut pune pe pauz
ă","3":"Nu s-a putut repeta","4":"Nu s-a putut reporni","5":"Nu s-a putut muta 
la platformă","6":"Sunetul nu a fost găsit","7":"Dosarul nu există","8":"Fere
astra nu există","9":"Nu s-a putut seta scurtătura","10":"Nu s-a putut porni t
recerea prin aplicație","11":"Nu s-a putut muta înapoi","12":"Nu s-a putut mut
a înapoi trecerea prin aplicații","13":"Nu s-a putut pune înapoi sursa implic
ită","14":"Nu s-a putut seta sursa implicită","15":"youtube-dl nu a fost găsi
t","16":"URL nevalid","17":"Nu s-a putut încărca youtube-dl JSON","18":"Eroare
 youtube-dl necunoscută","19":"Nu s-a putut șterge fișierul","20":"Nu s-a put
ut pune pe mut","21":"Nu s-a putut seta volumul personalizat","backendFunctionMi
ssing":"Funcția platformei lipsește: {
functionName}
","error":"Eroare"}
,"windows":{
"restartAsAdmin":"Restartează ca admin","administrativePrivilegesNeeded":"Privi
legii de admininstrator nevoite!","automaticSetup":"Configurat automat","selectM
ic":"Alege-ți microfonul si continuă","virtualAudioCableMisconfiguration":"Am 
detectat că cablul tău virtual audio nu este configurat bine.","badConfigurati
on":"Configurare greșita detectată","setUpNow":"Configurează acum","detectedM
isconfiguration":"Am detectat o greșeală la configurația VB-Cable"}
,"update":{
"ignore":"Ignoră","updateNow":"Actualizează","latestVersion":"Ultima versiune"
,"yourVersion":"Versiunea ta","title":"O actualizare este valabilă!"}
,"downloader":{
"close":"Închide","success":"{
title}
 a fost descărcat","startDownload":"Pornește descărcarea","cancelDownload":"A
nuleaza descărcarea","eta":"ETA","converting":"Convertez","progress":"Progress"
,"placeholder":"Bagă un link","installNow":"Instalează","notAvailable":"{
youtube-dl}
 sau/și {
ffmpeg}
 nu sunt instalate","title":"Descărcător"}
,"sort":{
"alphabeticalDescending":"În mod descrescător alfabetic","alphabeticalAscendin
g":"În mod crescător alfabetic","modifiedDescending":"În mod descrescător","
modifiedAscending":"În mod crescător","title":"Sortează"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 ca să pornești sunetul selectat","jumpToSelected":"{
enter}
 ca să sari la sunetul ales","changeSelection":"{
arrowKeys}
 ca să schimbi selecția","noResultsFound":"Nici un rezultat","typeToSearch":"S
crie ca să cauți"}
,"appPassThrough":{
"noOutputSelected":"Trebuie să ai o aplicație de ieșire","noAppsFound":"Nici 
o aplicație găsită","title":"Intrare prin aplicații"}
,"volume":{
"sync":"Sincronizeaza volumurile","remote":"Volum la aplicație","local":"Volum 
local"}
,"help":{
"viewSourceCode":"Vezi codul sursă","joinOurDiscord":"Intră în Discordul nost
ru","visitOurWebsite":"Intră pe site-ul nostru","supportUs":"Milogește-ne","re
loadSounds":{
"reload":"reîncarcă fereastra asta","text":"apasă {
ctrl}
 + {
r}
 să {
reload}
"}
,"appPassThrough":{
"show":"arată prin ce aplicații se trece","text":"apasă {
ctrl}
 + {
g}
 să {
show}
"}
,"togglePlayback":{
"playPause":"pune pe pauza/repornește sunetele care-s cântate","text":"apasă 
{
space}
 să {
playPause}
"}
,"options":{
"moreOptions":"arată mai multe opțiuni","text":"{
rightClick}
 să {
moreOptions}
"}
,"play":{
"play":"redă","text":"{
leftClick}
 să {
play}
"}
,"search":{
"search":"caută","text":"Apasă {
ctrl}
 + {
f}
 ca să {
search}
"}
,"title":"Ajutor"}
,"input":{
"space":"Space","arrowKeys":"Săgețile","rightClick":"Click dreapta","leftClick
":"Click stânga","enter":"Enter","shift":"Shift","ctrl":"CTRL"}
,"hotkeys":{
"setFor":"Bagă scurtătură pentru {
soundName}
","hotkey":"Scurtătură","title":"Adaugă scurtătură"}
,"noAudioBackend":{
"choose":"Alege una de jos","notDetected":"N-am detectat o platforma audio compa
tibilă pentru sistemu tău.","title":"Nicio platformă audio găsită"}
,"favorites":{
"title":"Preferate","favorite":"Preferate"}
,"empty":{
"noFavorites":"Deocamdată nu ai preferate. Adaugă niște sunete ca să le vezi
 aici","noSounds":"Nici un sunet compatibil găsit în dosarul {
path}
. Formatele compatibile sunt mp3, wav, flac","nothingToShow":"Nimic de arătat"}
,"deleteSound":{
"question":"Ai dori să ștergi sunetul {
soundName}
?","delete":"Șterge"}
,"removeTab":{
"question":"Ai dori să ștergi fereastra {
tabName}
?"}
,"actions":{
"dismiss":"Lasă baltă","ignore":"Ignoră","openFolder":"Deschide Dosar","confi
rmation":"Confirmare","shuffle":"Amestecă","off":"Oprit","on":"Pornit","no":"Nu
","yes":"Da","playlistMode":"Modul listă de redare","appPassThrough":"Trece pri
n","play":"Pornește","reloadSounds":"Reîncarcă","addTab":"Adaugă o fereastr�
�","search":"Caută","stop":"Oprește","refresh":"Reîncarcă"}
,"outputDevice":"Dispozitiv de ieșire","outputApp":"Aplicație de ieșire"}
')}
,9736:function(e,t,a){
}
,"9c08":function(e,t,a){
e.exports=a.p+"img/undraw_searching_p5ux.2ba68b15.svg"}
,"9c0c":function(e,t,a){
}
,a0b5:function(e,t,a){
"use strict";
a("8122")}
,a306:function(e){
e.exports=JSON.parse('{
"welcome":{
"title":"Bienvenido a {
programName}
","noTabs":"No hay ninguna pestaña. Añade pestañas pulsando en {
addTab}
 a la derecha","linuxDetected":"Parece que usas Linux...","linuxGuide1":"Para re
producir sonidos selecciona el programa que deseas usar en la esquina superior d
erecha.","linuxGuide2":"No hace falta que cambies tu dispositivo de salida en ni
ngun sitio.","windowsDetected":"Hemos detectado que estás usando Windows.","win
dowsGuide1":"Presta atención a las instrucciones de instalación {
seenOnWebsite}
","windowsGuide2":"tambien visto en nuestra página web"}
,"actions":{
"stop":"Detener","addTab":"Añadir pestaña nueva","reloadSounds":"Recargar","re
fresh":"Actualizar","appPassThrough":"Pasar a traves de","playlistMode":"Modo li
sta de reproducción","yes":"Sí","off":"Apagado","shuffle":"Aleatorio","confirm
ation":"Confirmación","openFolder":"Abrir Carpeta","ignore":"Ignorar","dismiss"
:"Omitir","search":"Buscar","play":"Reproducir","no":"No","on":"Encendido"}
,"outputApp":"Aplicación de salida","outputDevice":"Dispositivo de salida","rem
oveTab":{
"question":"Estás seguro que quieres cerrar la pestaña {
tabName}
?"}
,"deleteSound":{
"delete":"Borrar","question":"Estás seguro que quieres eliminar el sonido {
soundName}
?"}
,"empty":{
"noFavorites":"No tienes ningún sonido favorito. Añade algunos para mostrarlos
 aquí :)","noSounds":"No se han encontrado sonidos compatibles en la carpeta {
path}
. Los formatos admitidos son mp3, wav o flac","nothingToShow":"No hay nada a mos
trar"}
,"favorites":{
"title":"Favoritos","favorite":"Favorito"}
,"settings":{
"title":"Ajustes","tabHotkeysOnly":"Atajos sólo para la pestaña actual","viewM
ode":{
"title":"Modo de vista","listView":"Vista en Lista","gridView":"Vista en cuadrí
cula","launchpadMode":"Emulación de Launchpad"}
,"allowOverlapping":"Permitir superposición de sonido","deleteToTrash":"Mover a
 la papelera","minimizeToTray":"Minimizar a la bandeja del sistema","muteDuringP
layback":"Silenciar micrófono durante la reproducción","theme":{
"title":"Tema","system":"Sistema","dark":"Oscuro","light":"Claro (Por si te quie
res quedar ciego)"}
,"audioBackend":"Backend de audio","allowMultipleOutputs":"Permitir varias aplic
aciones de salida","pushToTalkKeys":"Teclas \\"pulsar-para-hablar\\"","language"
:"Anulación de idioma","stopHotkey":"Detener atajo","useAsDefaultDevice":"Usar 
como dispositivo predeterminado"}
,"tray":{
"show":"Mostrar ventana","hide":"Ocultar ventana","exit":"Salir"}
,"customVolume":{
"context":"Establecer volumen personalizado","setFor":"Establecer volumen para {
soundName}
"}
,"noAudioBackend":{
"choose":"Por favor escoge uno debajo","title":"No se ha encontrado ningún soni
do secundario","notDetected":"No logramos detectar un backend de audio compatibl
e en tu sistema."}
,"hotkeys":{
"title":"Definir atajo","hotkey":"Atajo","setFor":"Definir atajo para {
soundName}
"}
,"input":{
"ctrl":"ctrl","shift":"Shift","leftClick":"Clic izquierdo","rightClick":"Clic De
recho","enter":"Enter","arrowKeys":"Teclas de dirección","space":"Barra espacia
dora"}
,"windows":{
"automaticSetup":"Configurar automáticamente","detectedMisconfiguration":"Se de
tectó una configuración errónea con VB-Cable","setUpNow":"Configurar ahora","
badConfiguration":"Mala configuración detectada","virtualAudioCableMisconfigura
tion":"Detectamos que tu Virtual Audio Cable no está correctamente configurado.
","selectMic":"Por favor conecta tu micrófono y procede","administrativePrivile
gesNeeded":"¡Se necesitan privilegios administrativos!","restartAsAdmin":"Reini
ciar como administrador"}
,"errors":{
"0":"Fallo al reproducir","1":"Fallo al adelantar","2":"Fallo al pausar","3":"Fa
llo al repetir","4":"Fallo al resumir","6":"Sonido no encontrado","7":"La carpet
a no existe","8":"La pestaña no existe","9":"Fallo al establecer la tecla de ac
ceso rápido","11":"Fallo al mover hacia atrás","13":"Fallo al revertir fuente 
por defecto"}
,"help":{
"visitOurWebsite":"Visita nuestra página web","title":"Ayuda","search":{
"search":"buscar","text":"Presiona {
ctrl}
 + {
f}
 para {
search}
"}
,"play":{
"text":"{
leftClick}
 para {
play}
","play":"reproducir"}
,"options":{
"text":"{
rightClick}
 para {
moreOptions}
","moreOptions":"mostrar más opciones"}
,"togglePlayback":{
"text":"Presiona {
space}
 para {
playPause}
","playPause":"pausa/reanuda los sonidos que se están reproduciendo actualmente
"}
,"appPassThrough":{
"text":"Presiona {
ctrl}
 + {
g}
 para {
mostrar}
"}
,"reloadSounds":{
"text":"Presiona {
ctrl}
 + {
r}
 para {
reload}
","reload":"recargar la pestaña actual"}
,"supportUs":"Soportanos","joinOurDiscord":"Únete a nuestro Discord","viewSourc
eCode":"Mira el código fuente"}
,"downloader":{
"title":"Descargador","placeholder":"Ingresa un link","converting":"Convirtiendo
","notAvailable":"{
youtube-dl}
 y/o {
ffmpeg}
 no están instalados","installNow":"Instalar ahora","progress":"Progreso","eta"
:"Tiempo estimado","cancelDownload":"Cancelar Descarga","startDownload":"Comenza
r descarga","success":"Se descargó exítosamente: {
title}
","close":"Cerrar"}
,"update":{
"yourVersion":"Tu versión","title":"¡Una actualización está disponible!","la
testVersion":"Última versión","updateNow":"Actualizar ahora","ignore":"Ignorar
"}
,"volume":{
"local":"Volumen local","remote":"Volumen remoto","sync":"Sincronizar volúmenes
"}
,"appPassThrough":{
"noAppsFound":"No se encontraron aplicaciones","noOutputSelected":"Tienes que te
ner seleccionada una aplicación de salida"}
,"search":{
"typeToSearch":"Escribe para buscar","noResultsFound":"No se encontraron resulta
dos","changeSelection":"{
arrowKeys}
 para cambiar la selección","jumpToSelected":"{
enter}
 para saltar al sonido seleccionado","playSelected":"{
shift}
 + {
enter}
 para reproducir el sonido seleccionado"}
,"sort":{
"title":"Ordenar"}
,"systemInfo":{
"title":"Información del sistema","description":"Adjunta esta información cuan
do crees un reporte de bug","copyToClipboard":"Copiar al portapapeles"}
}
')}
,a43b:function(e,t,a){
e.exports=a.p+"img/undraw_void_3ggu.67479ed3.svg"}
,a4e4:function(e){
e.exports=JSON.parse('{
"customVolume":{
"setFor":"Lautstärkn fia {
soundName}
 setzn","context":"Eigene Lautstärkn setzn"}
,"tray":{
"exit":"Ausse","hide":"Fensta foschdecka","show":"Fensta azoing"}
,"settings":{
"pushToTalkKeys":"Schbrech Knobf","stopHotkey":"Hoid-Hotkey","allowMultipleOutpu
ts":"Erlaub mehrane Ausgab-Anwendunga","audioBackend":"Audio-backend","theme":{
"light":"Hell","dark":"Dunkl","system":"System","title":"Theme"}
,"muteDuringPlayback":"Mikrofon währendn Obschbain stumm schaidn","useAsDefault
Device":"Ois Standardgerät hea nemma","minimizeToTray":"In Systemtray foschoim"
,"deleteToTrash":"In Babiakorb foschoim","allowOverlapping":"Tonüberlappung zua
lossn","viewMode":{
"launchpadMode":"Emulierts Launchpad","gridView":"Rasda Ansichd","listView":"Lis
dnansicht","title":"Ansichds Modus"}
,"tabHotkeysOnly":"Hotkeys nua fian aktuelln Tab","title":"Einstellungan"}
,"favorites":{
"favorite":"Des besde","title":"Favoridn"}
,"empty":{
"noFavorites":"Du hosd bis iaz na koane Favoriten. Favorisier hoid a boa Sounds,
 dassdas do anzoing lossn kannsd","noSounds":"Koane Sounds im Ordner {
path}
 gfundn de zam bassnd. Unterstützte Dateiformate hand mp3, wav, flac","nothingT
oShow":"Nix gfundn"}
,"deleteSound":{
"question":"Mechsd den Sound {
soundName}
 löschn?","delete":"Löschn"}
,"removeTab":{
"question":"Mechsd den Tab {
tabName}
 wiagle entferna?"}
,"actions":{
"dismiss":"Voweafa","ignore":"Ignorian","openFolder":"Ordner afmocha","confirmat
ion":"Bschtätigung","shuffle":"Duachanand","off":"Aus","on":"Ei","no":"Na","yes
":"Freile","playlistMode":"Playlist-Modus","appPassThrough":"Duach glanga","play
":"Obschbain","reloadSounds":"Nei lona","addTab":"Neia Tab","search":"Suacha","s
top":"Afhean","refresh":"Nei lona"}
,"outputDevice":"Ausgab Gerät","outputApp":"Ausgab Anwendung","welcome":{
"windowsGuide1":"Schau af jedn Foi af de Installationsschritte, {
seenOnWebsite}
","windowsGuide2":"de wo af unsana Website agem hand","windowsDetected":"Mia ham
ma gmeagd, dassd Windows hea nimmsd.","linuxGuide2":"Es miasds enga Ein- oder Au
sgabegerät nirgends ändern.","linuxGuide1":"Um Geräusche ob zum spain, muasd 
nur de Ausgabe-Anwendung om rechts auswain.","linuxDetected":"Mia hamma gmeagd, 
dassd Linux hea nimmsd.","noTabs":"Bis iaz hand koane Tabs do. Füg oan hinzu, i
ndemsd {
addTab}
 af da rechten Seidn druggsd","title":"Griasde du bisd iaz bei {
programName}
"}
}
')}
,a530:function(e,t,a){
e.exports=a.p+"img/undraw_dropdown_menu_vv9j.e552bc70.svg"}
,a625:function(e){
e.exports=JSON.parse('{
"errors":{
"0":"Afspelen mislukt","1":"Zoeken mislukt","2":"Pauzeren mislukt","3":"Herhalen
 mislukt","4":"Hervatten mislukt","5":"Verplaatsen naar sink mislukt","6":"Gelui
d niet gevonden","7":"Map bestaat niet","8":"Tabblad bestaat niet","9":"Sneltoet
s instellen mislukt","10":"Doorverbinden mislukt","11":"Terug verplaatsen misluk
t","12":"Terug verplaatsen doorverbinding mislukt","13":"Terugzetten standaard b
ron mislukt","14":"Standaard bron instellen mislukt","15":"youtube-dl niet gevon
den","16":"Ongeldige URL","17":"Verwerken van youtube-dl JSON mislukt","18":"Onb
ekende youtube-dl fout","19":"Bestand verwijderen mislukt","backendFunctionMissi
ng":"Backend functie niet gevonden: {
functionName}
","error":"Error"}
,"systemInfo":{
"copyToClipboard":"Kopieer naar klembord","description":"Voeg deze informatie to
e bij het maken van een bug report","title":"Systeem informatie"}
,"update":{
"ignore":"Negeer","updateNow":"Update nu","latestVersion":"Nieuwste versie","you
rVersion":"Jouw versie","title":"Er is een update beschikbaar!"}
,"downloader":{
"close":"Sluiten","success":"Succesvol gedownload: {
title}
","startDownload":"Start download","cancelDownload":"Annuleer Download","eta":"R
esterend","converting":"Aan het converteren","progress":"Voortgang","placeholder
":"Vul een link in","installNow":"Installeer nu","notAvailable":"{
youtube-dl}
 en/of {
ffmpeg}
 zijn niet geïnstalleerd","title":"Downloader"}
,"sort":{
"alphabeticalDescending":"Alfabetisch aflopend","alphabeticalAscending":"Alfabet
isch oplopend","modifiedDescending":"Laatst gewijzigd aflopend","modifiedAscendi
ng":"Laatst gewijzigd oplopend","title":"Sorteren"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 om het momenteel geselecteerde geluid af te spelen","jumpToSelected":"{
enter}
 om naar het momenteel geselecteerde geluid te gaan","changeSelection":"{
arrowKeys}
 om de selectie te veranderen","noResultsFound":"Geen resultaten gevonden","type
ToSearch":"Typ om te zoeken"}
,"appPassThrough":{
"noOutputSelected":"Je moet een uitvoer applicatie geselecteerd hebben","noAppsF
ound":"Geen applicaties gevonden","title":"Applicatie audio doorverbinden"}
,"volume":{
"sync":"Koppel volumes","remote":"Extern volume","local":"Lokaal volume"}
,"help":{
"viewSourceCode":"Bekijk de source code","joinOurDiscord":"Join onze Discord","v
isitOurWebsite":"Bezoek onze website","supportUs":"Ondersteun ons","reloadSounds
":{
"reload":"het huidige tabblad te verversen","text":"Druk op {
ctrl}
 + {
r}
 om {
reload}
"}
,"appPassThrough":{
"show":"doorverbind instellingen te laten zien","text":"Druk op {
ctrl}
 + {
g}
 om {
show}
"}
,"options":{
"moreOptions":"meer opties te laten zien","text":"{
rightClick}
 om {
moreOptions}
"}
,"play":{
"play":"af te spelen","text":"{
leftClick}
 om {
play}
"}
,"search":{
"search":"zoeken","text":"Druk op {
ctrl}
 + {
f}
 om te {
search}
"}
,"title":"Help"}
,"input":{
"arrowKeys":"Pijltjestoetsen","rightClick":"Rechter muisknop","leftClick":"Linke
r muisknop","enter":"Enter","shift":"Shift","ctrl":"CTRL"}
,"hotkeys":{
"setFor":"Stel sneltoets in voor {
soundName}
","hotkey":"Sneltoets","title":"Stel sneltoets in"}
,"noAudioBackend":{
"choose":"Selecteer er een hieronder","notDetected":"We konden geen ondersteunde
 audio backend detecteren voor jouw systeem.","title":"Geen audio backend gevond
en"}
,"tray":{
"exit":"Afsluiten","hide":"Verberg venster","show":"Laat venster zien"}
,"settings":{
"pushToTalkKeys":"Push-to-talk toets","tabHotkeysOnly":"Sneltoetsen alleen voor 
huidig tabblad","stopHotkey":"Stop sneltoets","allowMultipleOutputs":"Sta meerde
re uitvoer applicaties toe","audioBackend":"Audio backend","theme":{
"light":"Licht","dark":"Donker","system":"Systeem","title":"Thema"}
,"muteDuringPlayback":"Demp microfoon tijdens afspelen","useAsDefaultDevice":"Ge
bruik als standaard apparaat","minimizeToTray":"Minimaliseer naar systeemvak","d
eleteToTrash":"Verwijder naar prullenbak","allowOverlapping":"Sta geluid overlap
 toe","viewMode":{
"launchpadMode":"Geëmuleerde Launchpad","gridView":"Rooster weergave","listView
":"Lijst weergave","title":"Weergave modus"}
,"title":"Instellingen"}
,"favorites":{
"favorite":"Favoriet","title":"Favorieten"}
,"empty":{
"noFavorites":"Je hebt momenteel geen favorieten. Voeg een paar geluiden toe om 
ze hier te laten zien","noSounds":"Geen bruikbare geluiden gevonden in map {
path}
. Ondersteunde bestandsformaten zijn mp3, wav, flac","nothingToShow":"Niks om te
 laten zien"}
,"deleteSound":{
"question":"Weet je zeker dat je het {
soundName}
 geluid wilt verwijderen?","delete":"Verwijder"}
,"actions":{
"addTab":"Nieuw Tabblad","openFolder":"Open map","confirmation":"Bevestiging","s
huffle":"Shuffle","off":"Uit","on":"Aan","no":"Nee","yes":"Ja","playlistMode":"A
fspeellijst modus","appPassThrough":"Doorverbinden","play":"Afspelen","reloadSou
nds":"Ververs","search":"Zoeken","stop":"Stop","refresh":"Ververs"}
,"removeTab":{
"question":"Weet je zeker dat je het {
tabName}
 tabblad wilt verwijderen?"}
,"outputDevice":"Uitvoer apparaat","outputApp":"Uitvoer applicatie","welcome":{
"windowsGuide2":"van onze website","windowsGuide1":"Volg de installatie stappen 
{
seenOnWebsite}
","windowsDetected":"We hebben gedetecteerd dat je Windows gebruikt.","linuxGuid
e2":"Je hoeft nergens je in- of uitvoer apparaten aan te passen.","linuxDetected
":"We hebben gedetecteerd dat je Linux gebruikt.","linuxGuide1":"Selecteer recht
sboven een uitvoer applicatie om geluiden af te spelen.","noTabs":"Er zijn momen
teel geen tabbladen. Voeg er een toe door aan de rechterkant op {
addTab}
 te klikken","title":"Welkom bij {
programName}
"}
}
')}
,af08:function(e){
e.exports=JSON.parse('{
"settings":{
"deleteToTrash":"حذف إلى المهملات","theme":{
"system":"النضام","light":"فاتح","title":"السمة","dark":"داكن
"}
,"tabHotkeysOnly":"مفاتيح الأختصار للعلامة الحالية �
�قط","viewMode":{
"listView":"عرض منتضم","gridView":"عرض شبكي","title":"وضع ال
مشاهدة","launchpadMode":"المنصة التي تتم محاكاتها"}
,"title":"الاعدادات","allowOverlapping":"السماح بتداخل ال
صوت","minimizeToTray":"تصغير إلى مهام النضام","useAsDefault
Device":"استخدم كجهاز افتراضي","muteDuringPlayback":"كتم ا
لميكروفون اثناء التشغيل","language":"تجاوز اللغة"
,"audioBackend":"الخلفية الصوتية","allowMultipleOutputs":"السم
اح بتطبيقات إخراج متعددة","stopHotkey":"إيقاف مفتا
ح الاختصار","pushToTalkKeys":"مفاتيح الضغط للتحدث","re
moteVolumeKnob":"مقبض مستوى الصوت عن بعد"}
,"welcome":{
"linuxDetected":"اكتشفنا أنك تستخدم لينكس.","linuxGuide2":"
لست بحاجة إلى تغير جهاز الأدخال او الإخراج ف
ي أي مكان.","windowsDetected":"اكتشفنا أنك تستخدم وين�
�وز.","windowsGuide2":"الموجودة على موقعنا","linuxGuide1":"ل
تشغيل الأصوات تحتاج إلى أختيار برنامج الأخر
اج في الجزء العلوي الأيمن.","title":"أهلا بك في {
programName}
","noTabs":"حاليا لايوجد اي صفحات اضف واحدة بالضغ
ط على {
addTab}
 في الجزء الأيمن","windowsGuide1":"تأكد من أتباع تعل�
�مات التثبيت {
seenOnWebsite}
"}
,"outputDevice":"جهاز الإخراج","actions":{
"refresh":"تحديث","stop":"إيقاف","search":"بحث","reloadSounds":"إ�
�ادة تحميل","play":"تشغيل","appPassThrough":"تمرير من خلا
ل","playlistMode":"وضع قائمة التشغيل","yes":"نعم","no":"لا"
,"off":"إيقاف","on":"تشغيل","shuffle":"خلط","confirmation":"تأك�
�د","dismiss":"رفض","addTab":"إضافة علامة","openFolder":"إفتح 
المجلد","ignore":"تجاهل"}
,"deleteSound":{
"delete":"حذف","question":"هل ترغب بحذف الصوت {
soundName}
؟"}
,"empty":{
"nothingToShow":"لايوجد شيء لإضهاره","noFavorites":"ليس لد�
�ك حاليا أي مفضلات. فضل بعض الأصوات لعرضها هن
ا","noSounds":"لم يتم العثور على أصوات متوافقة في �
�لمجلد {
path}
. الصيغ المدعومة mp3,wav,flac"}
,"favorites":{
"title":"مفضلات","favorite":"فضل"}
,"outputApp":"برنامج الأخراج","removeTab":{
"question":"هل ترغب بحذف العلامة {
tabName}
؟"}
,"noAudioBackend":{
"notDetected":"لم نتمكن من اكتشاف خلفية صوتية مدعو�
�ة لنظامك.","choose":"الرجاء اختيار واحد أدناه","tit
le":"لم يتم العثور على الخلفية الصوتية"}
,"hotkeys":{
"title":"تعيين مفتاح الاختصار","hotkey":"مفتاح التشغ
يل السريع","setFor":"تعيين مفتاح الاختصار ل {
soundName}
"}
,"help":{
"supportUs":"ادعمنا","joinOurDiscord":"انضم إلى Discord الخاص 
بنا","visitOurWebsite":"زيارة موقعنا على الانترنت","tit
le":"مساعدة","search":{
"text":"اضغط على {
ctrl}
 + {
f}
 إلى {
search}
","search":"بحث"}
,"play":{
"text":"{
leftClick}
 من أجل {
play}
","play":"لعب"}
,"options":{
"text":"{
rightClick}
 إلى {
moreOptions}
","moreOptions":"عرض المزيد من الخيارات"}
,"togglePlayback":{
"text":"اضغط على {
space}
 إلى {
playPause}
","playPause":"إيقاف / استئناف الأصوات التي يتم تشغ
يلها حاليا"}
,"appPassThrough":{
"text":"اضغط على {
ctrl}
 + {
g}
 إلى {
show}
","show":"إظهار تمرير التطبيق من خلال"}
,"reloadSounds":{
"text":"اضغط على {
ctrl}
 + {
r}
 إلى {
reload}
","reload":"إعادة تحميل علامة التبويب الحالية"}
,"viewSourceCode":"عرض شفرة المصدر"}
,"update":{
"updateNow":"التحديث الآن","ignore":"تجاهل","latestVersion":"أ�
�دث إصدار","title":"تحديث متاح!","yourVersion":"نسختك"}
,"errors":{
"0":"فشل في اللعب","1":"فشل في السعي","2":"فشل في ال�
�يقاف المؤقت","3":"فشل في التكرار","4":"فشل في الا
ستئناف","5":"فشل في الانتقال إلى الحوض","6":"لم ي�
�م العثور على الصوت","7":"المجلد غير موجود","8":"ع
لامة التبويب غير موجودة","9":"فشل في تعيين مفت�
�ح الاختصار","10":"فشل في البدء من خلال","11":"فشل �
�ي العودة","12":"فشل في العودة إلى المرور","13":"فش
ل في إرجاع المصدر الافتراضي","14":"فشل تعيين ال
مصدر الافتراضي","15":"youtube-dl غير موجود","16":"عنوا�
� URL غير صالح","17":"فشل تحليل youtube-dl JSON","18":"فشل غ�
�ر معروف youtube-dl","19":"فشل حذف الملف","20":"فشل في ك�
�م الصوت","21":"فشل في تعيين وحدة صوت مخصصة","error"
:"خطأ"}
,"appPassThrough":{
"title":"تمرير التطبيق من خلال","noAppsFound":"لم يتم ا�
�عثور على تطبيقات","noOutputSelected":"يجب أن تكون قد �
�ددت تطبيق إخراج"}
,"search":{
"jumpToSelected":"{
enter}
 للانتقال إلى الصوت المحدد حاليا","playSelected":"{
shift}
 + {
enter}
 لتشغيل الصوت المحدد حاليا","typeToSearch":"نوع الب�
�ث","noResultsFound":"لم يتم العثور على نتائج","changeSelect
ion":"{
arrowKeys}
 لتغيير التحديد"}
,"sort":{
"modifiedAscending":"تعديل تصاعدي","alphabeticalDescending":"التر
تيب الأبجدي تنازليا","title":"صنف","modifiedDescending":"ت�
�ديل تنازلي","alphabeticalAscending":"تصاعدي أبجدي"}
,"downloader":{
"installNow":"تثبيت الآن","cancelDownload":"إلغاء التنزيل",
"notAvailable":"لم يتم تثبيت {
youtube-dl}
 و / أو {
ffmpeg}
","title":"تنزيل","placeholder":"أدخل رابطا","progress":"التق�
�م","converting":"التحويل","eta":"ETA","startDownload":"بدء التن�
�يل","success":"تم التنزيل بنجاح: {
title}
","close":"غلق"}
,"systemInfo":{
"title":"معلومات النظام","description":"إرفاق هذه المع�
�ومات عند إنشاء تقرير عن الأخطاء","copyToClipboard":"�
�سخ إلى الحافظة"}
,"windows":{
"virtualAudioCableMisconfiguration":"لقد اكتشفنا أن كابل الص�
�ت الظاهري الخاص بك لم يتم إعداده بشكل صحيح.",
"badConfiguration":"تم الكشف عن تكوين غير صالح","selectMic"
:"يرجى تحديد الميكروفون الخاص بك والمتابعة","
detectedMisconfiguration":"تم اكتشاف خطأ في التكوين باست
خدام VB-Cable","setUpNow":"الإعداد الآن","automaticSetup":"الإ
عداد التلقائي","administrativePrivilegesNeeded":"الامتيازا�
� الإدارية اللازمة!","restartAsAdmin":"إعادة التشغيل 
كمسؤول"}
,"input":{
"ctrl":"CTRL","shift":"Shift","enter":"دخول","leftClick":"الزر الأي�
�ر","rightClick":"انقر على اليمين","arrowKeys":"مفاتيح ال�
�سهم","space":"الفضاء"}
,"tray":{
"show":"نافذة العرض","hide":"إخفاء النافذة","exit":"إخر
ج"}
,"customVolume":{
"context":"تعيين حجم مخصص","setFor":"تعيين مستوى الصو�
� ل {
soundName}
"}
,"volume":{
"local":"الحجم المحلي","remote":"مستوى الصوت عن بعد","
sync":"مزامنة وحدات التخزين"}
}
')}
,b1ba:function(e,t,a){
}
,b89c:function(e,t,a){
"use strict";
a("377c")}
,be0d:function(e,t,a){
"use strict";
a("f830")}
,cd49:function(e,t,a){
"use strict";
a.r(t);
a("e260"),a("e6cf"),a("cca6"),a("a79d");
var n=a("2b0e"),o=function(){
var e=this,t=e.$createElement,n=e._self._c||t;
return n("v-app",{
attrs:{
dark:""}
}
,[e.$store.getters.isLinux?n("AppPassthroughDrawer"):e._e(),n("v-main",[n("Updat
eModal"),n("SearchModal"),n("SetHotkeyModal"),n("SetVolumeModal"),n("RemoveTabMo
dal"),n("DeleteSoundModal"),e.$store.getters.isLinux?n("NoAudioBackendModal"):e.
_e(),null===e.$store.getters.isLinux||e.$store.getters.isLinux?e._e():n("Windows
SetupModal"),null===e.$store.getters.isLinux||e.$store.getters.isLinux?e._e():n(
"WindowsAdministrativeModal"),n("v-container",{
attrs:{
fluid:""}
}
,[n("v-row",{
staticClass:"flex-nowrap",attrs:{
dense:"","no-gutters":""}
}
,[n("v-col",{
attrs:{
cols:"auto"}
}
,[n("v-avatar",{
attrs:{
tile:"",size:"64"}
}
,[n("img",{
attrs:{
src:a("03de"),alt:"Logo"}
}
)]),n("span",{
staticClass:"text-h5 ml-3"}
,[e._v("Audiopad")])],1),n("v-spacer"),n("v-col",{
staticStyle:{
"min-width":"200px","max-width":"950px"}
,attrs:{
cols:"auto"}
}
,[n("OutputSelection"),n("v-btn",{
staticClass:"mt-2",attrs:{
color:"primary",disabled:e.$store.getters.settings.useAsDefaultDevice||!e.$store
.getters.isLinux&&e.$store.getters.currentPlaying.length>0,block:""}
,on:{
click:function(t){
return e.$store.dispatch("getOutputs")}
}
}
,[n("v-icon",{
attrs:{
left:"",dark:""}
}
,[e._v("mdi-reload")]),e._v(" "+e._s(e.$t("actions.refresh"))+" ")],1)],1)],1),n
("v-row",{
staticClass:"flex-nowrap",attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[n("v-col",{
attrs:{
cols:"auto"}
}
,[n("v-btn",{
attrs:{
color:"primary","x-large":"",block:"",disabled:0===e.$store.getters.currentPlayi
ng.length}
,on:{
click:function(t){
return e.$store.dispatch("stopSounds")}
}
}
,[n("v-icon",{
attrs:{
left:"",dark:""}
}
,[e._v("mdi-stop")]),e._v(" "+e._s(e.$t("actions.stop"))+" ")],1)],1),n("v-col",
{
staticClass:"ml-3",attrs:{
sm:"6",md:"7",xl:"8"}
}
,[n("VolumeSliders")],1)],1),n("v-row",{
staticClass:"flex-nowrap overflow-x-auto",attrs:{
dense:""}
}
,[n("v-col",{
staticStyle:{
width:"0"}
}
,[e.$store.getters.tabs.length>0?n("SoundTabs"):n("NoTabsCard")],1),n("v-col",{
attrs:{
cols:"auto"}
}
,[n("SideButtons")],1)],1)],1)],1),n("PlayingSoundsDrawer")],1)}
,i=[],s=a("1da1"),r=(a("99af"),a("7db0"),a("caad"),a("2532"),a("d81d"),a("b0c0")
,a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("b85c")),l=(a("4de4"),a("159b"),a("38
cf"),a("a434"),a("2f62")),u=a("f309");
n["a"].use(u["a"]);
var c=new u["a"]({
theme:{
dark:!0,options:{
customProperties:!0}
,themes:{
dark:{
primary:"#52b18c"}
,light:{
primary:"#52b18c"}
}
}
}
),d=(a("466d"),a("ac1f"),a("a925"));
function p(){
var e=a("49f8"),t={
}
;
return e.keys().forEach((function(a){
var n=a.match(/([A-Za-z0-9-_]+)\./i);
if(n&&n.length>1){
var o=n[1];
t[o]=e(a)}
}
)),t}
n["a"].use(d["a"]);
var m,g,h,v,f,k=new d["a"]({
locale:navigator.language,fallbackLocale:"en",silentFallbackWarn:!0,messages:p()
}
);
(function(e){
e[e["Off"]=0]="Off",e[e["On"]=1]="On",e[e["Shuffle"]=2]="Shuffle"}
)(m||(m={
}
)),function(e){
e[e["None"]=0]="None",e[e["PipeWire"]=1]="PipeWire",e[e["PulseAudio"]=2]="PulseA
udio"}
(g||(g={
}
)),function(e){
e[e["ModifiedDate_Ascending"]=0]="ModifiedDate_Ascending",e[e["ModifiedDate_Desc
ending"]=1]="ModifiedDate_Descending",e[e["Alphabetical_Ascending"]=2]="Alphabet
ical_Ascending",e[e["Alphabetical_Descending"]=3]="Alphabetical_Descending"}
(h||(h={
}
)),function(e){
e[e["System"]=0]="System",e[e["Dark"]=1]="Dark",e[e["Light"]=2]="Light"}
(v||(v={
}
)),function(e){
e[e["List"]=0]="List",e[e["Grid"]=1]="Grid",e[e["EmulatedLaunchpad"]=2]="Emulate
dLaunchpad"}
(f||(f={
}
)),n["a"].use(l["a"]);
var b=new l["a"].Store({
state:{
searchModal:!1,systemInfoModal:!1,setHotkeyModal:!1,setVolumeModal:!1,removeTabM
odal:!1,tabToRemove:null,deleteSoundModal:!1,soundToDelete:null,setHotkeySound:n
ull,setVolumeSound:null,appPassThroughDrawer:!1,tabs:[],favorites:[],showFavorit
es:!1,playlistMode:m.Off,outputs:[],selectedOutputs:[],playbackApps:[],currentPl
aying:[],isLinux:null,updateData:null,isDraggingSeekbar:!1,isVBCableProperlySetu
p:!0,administrativeModal:!1,settings:{
outputs:[],selectedTab:0,allowOverlapping:!0,deleteToTrash:!0,syncVolumes:!1,the
me:v.System,audioBackend:g.PulseAudio,language:null,viewMode:f.List,stopHotkey:[
],pushToTalkKeys:[],tabHotkeysOnly:!1,minimizeToTray:!1,localVolume:0,remoteVolu
me:0,allowMultipleOutputs:!1,useAsDefaultDevice:!1,muteDuringPlayback:!1}
}
,getters:{
searchModal:function(e){
return e.searchModal}
,noModalOpen:function(e){
return!e.appPassThroughDrawer&&!e.systemInfoModal&&!e.setVolumeModal&&!e.searchM
odal&&!e.administrativeModal&&!e.setHotkeyModal}
,setHotkeyModal:function(e){
return e.setHotkeyModal}
,setHotkeySound:function(e){
return e.setHotkeySound}
,setVolumeModal:function(e){
return e.setVolumeModal}
,setVolumeSound:function(e){
return e.setVolumeSound}
,systemInfoModal:function(e){
return e.systemInfoModal}
,removeTabModal:function(e){
return e.removeTabModal}
,tabToRemove:function(e){
return e.tabToRemove}
,deleteSoundModal:function(e){
return e.deleteSoundModal}
,soundToDelete:function(e){
return e.soundToDelete}
,appPassThroughDrawer:function(e){
return e.appPassThroughDrawer}
,tabs:function(e){
return e.tabs}
,currentTab:function(e){
return e.tabs[e.settings.selectedTab]}
,favoritesTab:function(e){
var t=e.tabs.map((function(e){
var t=e.sounds;
return t}
)).reduce((function(e,t){
return e.concat(t)}
),[]).filter((function(t){
var a=t.id;
return e.favorites.includes(a)}
)),a={
id:-1,name:"Favorites",sounds:t,sortMode:h.ModifiedDate_Descending}
;
return a}
,showFavorites:function(e){
return e.showFavorites}
,playlistMode:function(e){
return e.playlistMode}
,activeTabIndex:function(e){
return e.settings.selectedTab}
,outputs:function(e){
return e.outputs}
,selectedOutputs:function(e){
return e.selectedOutputs}
,playbackApps:function(e){
return e.playbackApps}
,currentPlaying:function(e){
return e.currentPlaying}
,currentPlayingSounds:function(e){
return e.currentPlaying.filter((function(e){
return"lengthInMs"in e}
))}
,settings:function(e){
return e.settings}
,allSounds:function(e){
return e.tabs.map((function(e){
var t=e.sounds;
return t}
)).reduce((function(e,t){
return e.concat(t)}
),[])}
,isLinux:function(e){
return e.isLinux}
,isDraggingSeekbar:function(e){
return e.isDraggingSeekbar}
,updateData:function(e){
return e.updateData}
,isVBCableProperlySetup:function(e){
return e.isVBCableProperlySetup}
,administrativeModal:function(e){
return e.administrativeModal}
}
,mutations:{
setSearchModal:function(e,t){
e.appPassThroughDrawer||(e.searchModal=t)}
,setSetHotkeyModal:function(e,t){
e.setHotkeyModal=t,t||(e.setHotkeySound=null)}
,setSetHotkeySound:function(e,t){
e.setHotkeySound=t,e.setHotkeyModal=!!t}
,setSetVolumeModal:function(e,t){
e.setVolumeModal=t,t||(e.setVolumeSound=null)}
,setSetVolumeSound:function(e,t){
e.setVolumeSound=t,e.setVolumeModal=!!t}
,setSoundLocalVolume:function(e,t){
var a=t.sound,n=t.volume;
a.localVolume=n}
,setSoundRemoteVolume:function(e,t){
var a=t.sound,n=t.volume;
a.remoteVolume=n}
,setSystemInfoModal:function(e,t){
return e.systemInfoModal=t}
,setRemoveTabModal:function(e,t){
return e.removeTabModal=t}
,setTabToRemove:function(e,t){
e.tabToRemove=t,e.removeTabModal=!!t}
,setDeleteSoundModal:function(e,t){
return e.deleteSoundModal=t}
,setSoundToDelete:function(e,t){
e.soundToDelete=t,e.deleteSoundModal=!!t}
,setAppPassThroughDrawer:function(e,t){
e.searchModal||(e.appPassThroughDrawer=t)}
,addTab:function(e,t){
e.tabs.push(t)}
,setTabs:function(e,t){
e.tabs=t}
,setShowFavorites:function(e,t){
return e.showFavorites=t}
,setPlaylistMode:function(e,t){
return e.playlistMode=t}
,setTabSounds:function(e,t){
var a=t.tab,n=t.sounds;
a.sounds=n}
,setActiveTabIndex:function(e,t){
return e.settings.selectedTab=t}
,setOutputs:function(e,t){
return e.outputs=t}
,setPlaybackApps:function(e,t){
return e.playbackApps=t}
,setSelectedOutputs:function(e,t){
e.selectedOutputs=t,e.settings.outputs=t.map((function(e){
var t=e.application;
return t}
))}
,updateSoundPlayback:function(e,t){
var a=t.currentPlayingSounds,n=t.paused;
a.forEach((function(e){
return e.paused=n}
))}
,updateSound:function(e,t){
var a=t.playing,n=t.ms,o=t.paused,i=t.repeat;
void 0!==n&&(a.readInMs=n),void 0!==o&&(a.paused=o),void 0!==i&&(a.repeat=i)}
,toggleFavorite:function(e,t){
var a=e.tabs.map((function(e){
var t=e.sounds;
return t}
)).reduce((function(e,t){
return e.concat(t)}
),[]).find((function(e){
var a=e.id;
return a===t.id}
));
a&&(a.isFavorite=!a.isFavorite)}
,setFavorites:function(e,t){
e.favorites=t}
,addToCurrentlyPlaying:function(e,t){
return e.currentPlaying.push(t)}
,clearCurrentlyPlaying:function(e){
return e.currentPlaying=[]}
,removeFromCurrentlyPlaying:function(e,t){
var a=e.currentPlaying.find((function(e){
return"lengthInMs"in e&&"lengthInMs"in t?e.id===t.id:"application"in e&&"applica
tion"in t&&e.application===t.application}
));
a?e.currentPlaying.splice(e.currentPlaying.indexOf(a),1):console.warn("removeFro
mCurrentlyPlaying called but playing not found",JSON.stringify(t))}
,deleteSound:function(e,t){
e.tabs.forEach((function(e){
return e.sounds.splice(e.sounds.indexOf(t),1)}
))}
,setSettings:function(e,t){
switch(e.settings=t,t.theme){
case v.System:c.framework.theme.dark=window.matchMedia("(prefers-color-scheme: d
ark)").matches;
break;
case v.Dark:c.framework.theme.dark=!0;
break;
case v.Light:c.framework.theme.dark=!1;
break}
k.locale=t.language||navigator.language}
,setLocalVolume:function(e,t){
e.settings.localVolume=t}
,setRemoteVolume:function(e,t){
e.settings.remoteVolume=t}
,setTabHotkeysOnly:function(e,t){
return e.settings.tabHotkeysOnly=t}
,setViewMode:function(e,t){
return e.settings.viewMode=t}
,setAudioBackend:function(e,t){
e.settings.audioBackend=t,t==g.PipeWire&&(e.settings.muteDuringPlayback=!1,e.set
tings.useAsDefaultDevice=!1)}
,setLanguage:function(e,t){
e.settings.language=t,k.locale=t||navigator.language}
,setAllowOverlapping:function(e,t){
return e.settings.allowOverlapping=t}
,setDeleteToTrash:function(e,t){
return e.settings.deleteToTrash=t}
,setSyncVolumes:function(e,t){
return e.settings.syncVolumes=t}
,setMinimizeToTray:function(e,t){
return e.settings.minimizeToTray=t}
,setAllowMultipleOutputs:function(e,t){
e.settings.allowMultipleOutputs=t,t||(e.selectedOutputs.length>1&&(e.selectedOut
puts=[e.selectedOutputs[0]]),e.settings.outputs.length>1&&(e.settings.outputs=[e
.settings.outputs[0]]))}
,setUseAsDefaultDevice:function(e,t){
return e.settings.useAsDefaultDevice=t}
,setMuteDuringPlayback:function(e,t){
return e.settings.muteDuringPlayback=t}
,setSortMode:function(e,t){
var a=e.tabs[e.settings.selectedTab];
a&&(a.sortMode=t)}
,setStopHotkey:function(e,t){
return e.settings.stopHotkey=t}
,setPushToTalkKeys:function(e,t){
return e.settings.pushToTalkKeys=t}
,setIsLinux:function(e,t){
return e.isLinux=t}
,setIsDraggingSeekbar:function(e,t){
return e.isDraggingSeekbar=t}
,setTheme:function(e,t){
switch(e.settings.theme=t,t){
case v.System:c.framework.theme.dark=window.matchMedia("(prefers-color-scheme: d
ark)").matches;
break;
case v.Dark:c.framework.theme.dark=!0;
break;
case v.Light:c.framework.theme.dark=!1;
break}
}
,setUpdateData:function(e,t){
return e.updateData=t}
,setIsVBCableProperlySetup:function(e,t){
return e.isVBCableProperlySetup=t}
,setAdministrativeModal:function(e,t){
return e.administrativeModal=t}
,setHotkeys:function(e,t){
var a=t.sound,n=t.hotkeys;
return a.hotkeys=n}
,setHotkeySequence:function(e,t){
var a=t.sound,n=t.hotkeySequence;
return a.hotkeySequence=n}
}
,actions:{
getTabs:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.getTabs();
case 3:n=t.sent,n&&a("setTabs",n);
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,getPlaybackApps:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.getPlayback();
case 3:n=t.sent,n&&a("setPlaybackApps",n);
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,setSelectedOutputs:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,o=e.dispatch,n("setSelectedOutputs",t),a.next=4,o("save
Settings");
case 4:case"end":return a.stop()}
}
),a)}
)))()}
,addTab:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n,o,i,s;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.addTab();
case 3:if(n=t.sent,n){
o=Object(r["a"])(n);
try{
for(o.s();
!(i=o.n()).done;
)s=i.value,a("addTab",s)}
catch(l){
o.e(l)}
finally{
o.f()}
}
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,removeTab:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o,i,s,r,l;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.state,o=e.getters,i=e.commit,s=e.dispatch,r=n.tabs.indexOf(t),
a.next=4,window.removeTab(r);
case 4:if(l=a.sent,!l){
a.next=11;
break}
if(i("setTabs",l),!(o.activeTabIndex>r)){
a.next=10;
break}
return a.next=10,s("setActiveTabIndex",o.activeTabIndex-1);
case 10:i("setRemoveTabModal",!1);
case 11:case"end":return a.stop()}
}
),a)}
)))()}
,setActiveTabIndex:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o,i;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:if(n=e.commit,o=e.getters,i=e.dispatch,void 0===t||t===o.activeTabIndex){
a.next=5;
break}
return n("setActiveTabIndex",t),a.next=5,i("saveSettings");
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,refreshTab:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n,o,i,s;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:if(a=e.commit,n=e.getters,0!==n.tabs.length){
t.next=3;
break}
return t.abrupt("return");
case 3:return o=n.activeTabIndex,i=n.tabs[o],t.next=7,window.refreshTab(o);
case 7:s=t.sent,s&&a("setTabSounds",{
tab:i,sounds:s.sounds}
);
case 9:case"end":return t.stop()}
}
),t)}
)))()}
,getFavorites:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.getFavorites();
case 3:if(t.t0=t.sent,t.t0){
t.next=6;
break}
t.t0=[];
case 6:n=t.t0,a("setFavorites",n);
case 8:case"end":return t.stop()}
}
),t)}
)))()}
,setShowFavorites:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,n("setShowFavorites",t),a.next=4,window.isOnFavorites(t
);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
,toggleFavorite:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,n("toggleFavorite",t),a.next=4,window.markFavorite(t.id
,t.isFavorite);
case 4:o=a.sent,o&&n("setFavorites",o);
case 6:case"end":return a.stop()}
}
),a)}
)))()}
,playSound:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,a.next=3,window.playSound(t.id);
case 3:o=a.sent,o&&n("addToCurrentlyPlaying",o);
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,deleteSound:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,a.next=3,window.deleteSound(t.id);
case 3:o=a.sent,o&&(n("deleteSound",t),n("setDeleteSoundModal",!1));
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,startPassthrough:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,a.next=3,window.startPassthrough(t.application);
case 3:o=a.sent,o&&n("addToCurrentlyPlaying",t);
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,stopSounds:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.stopSounds();
case 3:a("clearCurrentlyPlaying");
case 4:case"end":return t.stop()}
}
),t)}
)))()}
,getOutputs:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o,i,s,r,l,u,c;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.state,o=e.commit,i=e.dispatch,a.next=3,window.getOutputs();
case 3:if(s=a.sent,!s){
a.next=14;
break}
if(o("setOutputs",s),!(t&&t.length>0)){
a.next=11;
break}
if(r=n.outputs.filter((function(e){
var a=e.name;
return t.includes(a)}
)),!(r&&r.length>0)){
a.next=11;
break}
return o("setSelectedOutputs",r),a.abrupt("return");
case 11:return n.settings.useAsDefaultDevice?o("setSelectedOutputs",[]):(l=n.sel
ectedOutputs,s.length>0?0===l.length?o("setSelectedOutputs",[s[0]]):(u=l.map((fu
nction(e){
var t=e.application;
return t}
)),c=s.filter((function(e){
var t=e.name;
return u.includes(t)}
)),c.length>0?o("setSelectedOutputs",c):o("setSelectedOutputs",[s[0]])):o("setSe
lectedOutputs",[])),a.next=14,i("saveSettings");
case 14:case"end":return a.stop()}
}
),a)}
)))()}
,getSettings:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.getSettings();
case 3:n=t.sent,n&&a("setSettings",n);
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,setUseAsDefaultDevice:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:if(n=e.commit,o=e.dispatch,n("setUseAsDefaultDevice",t),!t){
a.next=6;
break}
n("setSelectedOutputs",[]),a.next=8;
break;
case 6:return a.next=8,o("getOutputs");
case 8:return a.next=10,o("saveSettings");
case 10:case"end":return a.stop()}
}
),a)}
)))()}
,setHotkeys:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,n("setHotkeys",t),a.next=4,window.setHotkey(t.sound.id,
t.sound.hotkeys);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
,saveSettings:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n,o;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.getters,n=e.commit,t.next=3,window.changeSettings(a.settings);
case 3:o=t.sent,o&&n("setSettings",o);
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,setLocalVolume:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,o=e.getters,n("setLocalVolume",t),a.next=4,window.chang
eSettings(o.settings);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
,setRemoteVolume:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,o=e.getters,n("setRemoteVolume",t),a.next=4,window.chan
geSettings(o.settings);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
,pauseSound:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,a.next=3,window.pauseSound(t.id);
case 3:o=a.sent,o&&n("updateSound",{
playing:t,ms:o.readInMs,paused:o.paused,repeat:o.repeat}
);
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,resumeSound:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,a.next=3,window.resumeSound(t.id);
case 3:o=a.sent,o&&n("updateSound",{
playing:t,ms:o.readInMs,paused:o.paused,repeat:o.repeat}
);
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,getIsLinux:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.t0=a,t.next=4,window.isLinux();
case 4:if(t.t1=t.sent,t.t1){
t.next=7;
break}
t.t1=!1;
case 7:t.t2=t.t1,(0,t.t0)("setIsLinux",t.t2);
case 9:case"end":return t.stop()}
}
),t)}
)))()}
,getVBCableState:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.isVBCableProperlySetup();
case 3:n=t.sent,a("setIsVBCableProperlySetup",n);
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,moveTabs:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n,o,i;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,n=e.state,o=n.tabs.map((function(e){
var t=e.id;
return t}
)),t.next=4,window.moveTabs(o);
case 4:i=t.sent,i&&a("setTabs",i);
case 6:case"end":return t.stop()}
}
),t)}
)))()}
,setSortMode:function(e,t){
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o,i;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e.commit,o=e.getters,a.next=3,window.setSortMode(o.activeTabInde
x,t);
case 3:i=a.sent,i&&(n("setSortMode",t),n("setTabSounds",{
tab:o.currentTab,sounds:i.sounds}
));
case 5:case"end":return a.stop()}
}
),a)}
)))()}
,getUpdateData:function(e){
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return a=e.commit,t.next=3,window.updateCheck();
case 3:n=t.sent,n&&a("setUpdateData",n);
case 5:case"end":return t.stop()}
}
),t)}
)))()}
}
,modules:{
}
,strict:!1}
);
function y(e){
return w.apply(this,arguments)}
function w(){
return w=Object(s["a"])(regeneratorRuntime.mark((function e(t){
return regeneratorRuntime.wrap((function(e){
while(1)switch(e.prev=e.next){
case 0:return e.next=2,window.openUrl(t);
case 2:case"end":return e.stop()}
}
),e)}
))),w.apply(this,arguments)}
function S(){
return x.apply(this,arguments)}
function x(){
return x=Object(s["a"])(regeneratorRuntime.mark((function e(){
return regeneratorRuntime.wrap((function(e){
while(1)switch(e.prev=e.next){
case 0:return window.onError=function(e){
n["a"].$toast.error("".concat(k.t("errors.error"),": ").concat(k.t("errors."+e))
)}
,window.getTranslation=function(e){
return"".concat(k.t(e))}
,window.getStore=function(){
return b}
,window.updateSound=function(e){
var t=b.getters.currentPlayingSounds.find((function(t){
return t.id===e.id}
));
b.getters.isDraggingSeekbar||(t?b.commit("updateSound",{
playing:t,ms:e.readInMs}
):console.warn("Could not find sound for playingSound with id",e.id))}
,window.finishSound=function(e){
b.commit("removeFromCurrentlyPlaying",e);
var t=b.getters.playlistMode;
if(t!==m.Off&&0===b.getters.currentPlayingSounds.length){
var a=e.sound.id,n=b.getters.tabs,o=b.getters.favoritesTab,i=b.getters.showFavor
ites?o:n.find((function(e){
var t=e.sounds;
return t.map((function(e){
var t=e.id;
return t}
)).includes(a)}
));
if(i){
var s=i.sounds,r=s.find((function(e){
var t=e.id;
return t===a}
));
if(r){
var l=s.indexOf(r),u=t===m.Shuffle?s[Math.floor(Math.random()*s.length)]:s[l+1];
u&&b.dispatch("playSound",u)}
else console.warn("Sound ".concat(e.sound.name," not found"))}
else console.warn("Tab from playing sound ".concat(e.sound.name," not found"))}
}
,window.onSoundPlayed=function(e){
e&&b.commit("addToCurrentlyPlaying",e)}
,e.next=8,Promise.all([b.dispatch("getSettings"),b.dispatch("getIsLinux"),b.disp
atch("getTabs"),b.dispatch("getUpdateData"),b.dispatch("getFavorites")]);
case 8:return e.next=10,b.dispatch("getOutputs",b.state.settings.outputs);
case 10:case"end":return e.stop()}
}
),e)}
))),x.apply(this,arguments)}
var T=function(){
var e=this,t=e.$createElement,n=e._self._c||t;
return n("v-navigation-drawer",{
attrs:{
fixed:"",left:"",temporary:"",width:"300px"}
,model:{
value:e.appPassThroughDrawer,callback:function(t){
e.appPassThroughDrawer=t}
,expression:"appPassThroughDrawer"}
}
,[n("v-toolbar",{
attrs:{
dark:"",color:"primary"}
}
,[n("v-toolbar-title",{
staticClass:"text-subtitle-1"}
,[n("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cable-data")]),e._v(" "+e._s(e.$t("appPassThrough.title"))+" ")],1),
n("v-toolbar-items",{
staticClass:"ml-auto"}
,[n("v-btn",{
staticClass:"ml-3 mr-n4",attrs:{
icon:"",block:""}
,on:{
click:function(t){
return e.$store.dispatch("getPlaybackApps")}
}
}
,[n("v-icon",[e._v("mdi-reload")])],1)],1)],1),0!==e.$store.getters.selectedOutp
uts.length||e.$store.getters.settings.useAsDefaultDevice?e.$store.getters.playba
ckApps.length>0?n("v-list",{
attrs:{
nav:"",dense:""}
}
,e._l(e.$store.getters.playbackApps,(function(t,a){
return n("v-list-item",{
key:a,on:{
click:function(a){
return e.startPassthrough(t)}
}
}
,[t.appIcon?n("v-list-item-icon",{
staticClass:"mr-1"}
,[n("img",{
staticStyle:{
"object-fit":"scale-down"}
,attrs:{
src:"data:image/png;
base64,"+t.appIcon,alt:t.name+" icon",width:"32"}
}
)]):e._e(),n("v-list-item-content",[n("v-list-item-title",{
staticClass:"text-wrap"}
,[e._v(" "+e._s(e.getPrettyName(t))+" ")])],1)],1)}
)),1):[n("v-row",{
staticClass:"mx-5 mt-6",attrs:{
justify:"center"}
}
,[n("v-img",{
attrs:{
src:a("8f3e"),width:"232",contain:""}
}
)],1),n("v-row",{
staticClass:"mt-5",attrs:{
justify:"center"}
}
,[n("span",[e._v(e._s(e.$t("appPassThrough.noAppsFound")))])])]:[n("v-row",{
staticClass:"mx-5 mt-6",attrs:{
justify:"center"}
}
,[n("v-img",{
attrs:{
src:a("a530"),width:"232",contain:""}
}
)],1),n("div",{
staticClass:"mx-3 mt-5 text-wrap text-center"}
,[n("span",[e._v(e._s(e.$t("appPassThrough.noOutputSelected")))])])]],2)}
,V=[],A=(a("4ec9"),a("1276"),a("054d"));
function D(e){
var t=e.name,a=e.application;
return t?t.toLowerCase()===a.toLowerCase()?t:"".concat(a," (").concat(t,")"):a}
var _=new Map([["bar","Boarisch"]]);
function C(e){
if(_.has(e))return _.get(e);
var t=e.split("_")[0];
return A["a"].getNativeName(t)}
function M(e){
return null!==e?e>80?"mdi-volume-high":e>30?"mdi-volume-medium":e>0?"mdi-volume-
low":"mdi-volume-off":"mdi-volume-variant-off"}
var O=n["a"].extend({
name:"AppPassthroughDrawer",computed:{
appPassThroughDrawer:{
get:function(){
return this.$store.getters.appPassThroughDrawer}
,set:function(e){
this.$store.commit("setAppPassThroughDrawer",e)}
}
}
,mounted:function(){
this.$store.dispatch("getPlaybackApps"),document.addEventListener("keydown",this
.keyDownHandler)}
,beforeDestroy:function(){
document.removeEventListener("keydown",this.keyDownHandler)}
,methods:{
startPassthrough:function(e){
this.$store.dispatch("startPassthrough",e),this.appPassThroughDrawer=!1}
,keyDownHandler:function(e){
!e.ctrlKey||e.shiftKey||e.altKey||"KeyG"!==e.code||(e.preventDefault(),this.appP
assThroughDrawer=!this.appPassThroughDrawer)}
,getPrettyName:D}
}
),P=O,j=a("2877"),$=a("6544"),z=a.n($),N=a("8336"),F=a("132d"),I=a("adda"),R=a("
8860"),L=a("da13"),B=a("5d23"),H=a("34c3"),K=a("f774"),E=a("0fd9"),G=a("71d9"),U
=a("2a7f"),W=Object(j["a"])(P,T,V,!1,null,null,null),q=W.exports;
z()(W,{
VBtn:N["a"],VIcon:F["a"],VImg:I["a"],VList:R["a"],VListItem:L["a"],VListItemCont
ent:B["b"],VListItemIcon:H["a"],VListItemTitle:B["c"],VNavigationDrawer:K["a"],V
Row:E["a"],VToolbar:G["a"],VToolbarItems:U["a"],VToolbarTitle:U["b"]}
);
var J=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return e.currentPlaying.length>0?a("v-footer",{
attrs:{
app:"",rounded:"","max-height":"50"}
}
,[e.currentPlaying.length>1?a("v-btn",{
staticClass:"mr-5",attrs:{
icon:""}
,on:{
click:function(t){
e.sheet=!0}
}
}
,[a("v-badge",{
attrs:{
overlap:"",color:"primary",content:e.currentPlaying.length,value:e.currentPlayin
g.length}
}
,[a("v-icon",[e._v("mdi-chevron-up")])],1)],1):e._e(),a("PlayingControl",{
attrs:{
playing:e.currentPlaying[e.currentPlaying.length-1]}
}
),a("v-bottom-sheet",{
model:{
value:e.sheet,callback:function(t){
e.sheet=t}
,expression:"sheet"}
}
,[a("v-list",{
attrs:{
nav:"",dense:""}
}
,[a("v-list-item-group",[a("v-virtual-scroll",{
attrs:{
items:e.currentPlaying,"item-height":"40",bench:"25","max-height":"350"}
,scopedSlots:e._u([{
key:"default",fn:function(e){
var t=e.item;
return[a("PlayingControl",{
attrs:{
playing:t}
}
)]}
}
],null,!1,3647791426)}
)],1)],1)],1)],1):e._e()}
,Y=[],Z=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return e.playing.lengthInMs?a("SoundControl",{
attrs:{
"playing-sound":e.playing}
}
):a("PassthroughControl",{
attrs:{
output:e.playing}
}
)}
,Q=[],X=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-row",{
staticClass:"mr-5",attrs:{
dense:"","no-gutters":""}
}
,[a("v-col",{
attrs:{
cols:"1","align-self":"center"}
}
,[a("span",{
staticClass:"sound-name"}
,[e._v(" "+e._s(e.playingSound.sound.name)+" ")])]),a("v-col",{
attrs:{
cols:"auto"}
}
,[e.playingSound.paused?a("v-btn",{
attrs:{
icon:""}
,on:{
click:e.play}
}
,[a("v-icon",[e._v("mdi-play")])],1):a("v-btn",{
attrs:{
icon:""}
,on:{
click:e.pause}
}
,[a("v-icon",[e._v("mdi-pause")])],1),e.playingSound.repeat?a("v-btn",{
attrs:{
icon:""}
,on:{
click:e.repeatOff}
}
,[a("v-icon",[e._v("mdi-repeat")])],1):a("v-btn",{
attrs:{
icon:""}
,on:{
click:e.repeat}
}
,[a("v-icon",[e._v("mdi-repeat-off")])],1)],1),a("v-col",{
attrs:{
"align-self":"center"}
}
,[a("v-slider",{
attrs:{
min:"0",max:e.playingSound.lengthInMs,"hide-details":""}
,on:{
start:function(t){
return e.$store.commit("setIsDraggingSeekbar",!0)}
,end:function(t){
return e.$store.commit("setIsDraggingSeekbar",!1)}
,change:e.seek}
,model:{
value:e.readInMs,callback:function(t){
e.readInMs=t}
,expression:"readInMs"}
}
,[a("span",{
attrs:{
slot:"prepend"}
,slot:"prepend"}
,[e._v(e._s(e.parseTime(e.playingSound.readInMs)))]),a("span",{
attrs:{
slot:"append"}
,slot:"append"}
,[e._v(e._s(e.parseTime(e.playingSound.lengthInMs)))])])],1),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-btn",{
attrs:{
icon:""}
,on:{
click:e.stop}
}
,[a("v-icon",[e._v("mdi-stop")])],1)],1)],1)}
,ee=[],te=a("5a0c"),ae=a.n(te),ne=n["a"].extend({
name:"SoundControl",props:{
playingSound:{
type:Object,required:!0}
}
,computed:{
readInMs:{
get:function(){
return this.playingSound.readInMs}
,set:function(e){
this.$store.commit("updateSound",{
playing:this.playingSound,ms:e}
)}
}
}
,methods:{
pause:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,e.$store.dispatch("pauseSound",e.playingSound);
case 2:case"end":return t.stop()}
}
),t)}
)))()}
,play:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,e.$store.dispatch("resumeSound",e.playingSound);
case 2:case"end":return t.stop()}
}
),t)}
)))()}
,seek:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return a.next=2,window.seekSound(t.playingSound.id,e);
case 2:n=a.sent,n&&t.$store.commit("updateSound",{
playing:t.playingSound,ms:n.readInMs,paused:n.paused,repeat:n.repeat}
);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
,repeat:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.repeatSound(e.playingSound.id,!0);
case 2:a=t.sent,a&&e.$store.commit("updateSound",{
playing:e.playingSound,paused:a.paused,repeat:a.repeat}
);
case 4:case"end":return t.stop()}
}
),t)}
)))()}
,repeatOff:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.repeatSound(e.playingSound.id,!1);
case 2:a=t.sent,a&&e.$store.commit("updateSound",{
playing:e.playingSound,paused:a.paused,repeat:a.repeat}
);
case 4:case"end":return t.stop()}
}
),t)}
)))()}
,stop:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.stopSound(e.playingSound.id);
case 2:a=t.sent,a&&e.$store.commit("removeFromCurrentlyPlaying",e.playingSound);
case 4:case"end":return t.stop()}
}
),t)}
)))()}
,parseTime:function(e){
var t=ae.a.duration(e);
return 0===t.hours()?t.format("mm:ss"):t.format("HH:mm:ss")}
}
}
),oe=ne,ie=a("62ad"),se=a("ba0d"),re=Object(j["a"])(oe,X,ee,!1,null,null,null),l
e=re.exports;
z()(re,{
VBtn:N["a"],VCol:ie["a"],VIcon:F["a"],VRow:E["a"],VSlider:se["a"]}
);
var ue=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-row",{
staticClass:"mr-5",attrs:{
dense:"","no-gutters":""}
}
,[a("v-col",{
attrs:{
cols:"1","align-self":"center"}
}
,[a("span",{
staticClass:"sound-name"}
,[e._v(e._s(e.getPrettyName(e.output)))])]),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-btn",{
attrs:{
icon:"",disabled:!0}
}
,[a("v-icon",[e._v("mdi-pause")])],1)],1),a("v-col",{
attrs:{
"align-self":"center"}
}
,[a("v-slider",{
attrs:{
disabled:!0,"hide-details":""}
}
)],1),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-btn",{
attrs:{
icon:""}
,on:{
click:e.stop}
}
,[a("v-icon",[e._v("mdi-stop")])],1)],1)],1)}
,ce=[],de=n["a"].extend({
name:"PassthroughControl",props:{
output:{
type:Object,required:!0}
}
,methods:{
stop:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.stopPassthrough(e.output.application);
case 2:e.$store.commit("removeFromCurrentlyPlaying",e.output);
case 3:case"end":return t.stop()}
}
),t)}
)))()}
,getPrettyName:D}
}
),pe=de,me=Object(j["a"])(pe,ue,ce,!1,null,null,null),ge=me.exports;
z()(me,{
VBtn:N["a"],VCol:ie["a"],VIcon:F["a"],VRow:E["a"],VSlider:se["a"]}
);
var he=n["a"].extend({
name:"PlayingControl",components:{
PassthroughControl:ge,SoundControl:le}
,props:{
playing:{
type:Object,required:!0}
}
}
),ve=he,fe=(a("dc93"),Object(j["a"])(ve,Z,Q,!1,null,null,null)),ke=fe.exports,be
=n["a"].extend({
name:"PlayingSoundsDrawer",components:{
PlayingControl:ke}
,data:function(){
return{
sheet:!1}
}
,computed:Object(l["b"])(["currentPlaying"]),watch:{
currentPlaying:function(){
this.currentPlaying.length<2&&(this.sheet=!1)}
}
}
),ye=be,we=a("4ca6"),Se=a("288c"),xe=a("553a"),Te=a("1baa"),Ve=a("0de5"),Ae=Obje
ct(j["a"])(ye,J,Y,!1,null,null,null),De=Ae.exports;
z()(Ae,{
VBadge:we["a"],VBottomSheet:Se["a"],VBtn:N["a"],VFooter:xe["a"],VIcon:F["a"],VLi
st:R["a"],VListItemGroup:Te["a"],VVirtualScroll:Ve["a"]}
);
var _e=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-select",{
attrs:{
"return-object":"",disabled:e.$store.getters.settings.useAsDefaultDevice||!e.$st
ore.getters.isLinux&&e.$store.getters.currentPlaying.length>0,"item-text":"name"
,items:e.$store.getters.outputs,label:e.$t(e.$store.getters.isLinux?"outputApp":
"outputDevice"),"hide-details":"",clearable:"",multiple:e.$store.getters.setting
s.allowMultipleOutputs,outlined:"",dense:""}
,scopedSlots:e._u([{
key:"selection",fn:function(t){
var n=t.item;
return[a("v-row",{
staticClass:"text-truncate",attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[e.$store.getters.settings.allowMultipleOutputs&&e.selectedOutputs.length>1?[a(
"v-chip",{
attrs:{
outlined:"",pill:"",small:""}
}
,[n.appIcon?a("v-img",{
staticClass:"mr-1",attrs:{
src:"data:image/png;
base64,"+n.appIcon,alt:n.name+" icon",width:"15"}
}
):e._e(),a("span",{
staticClass:"text-truncate"}
,[e._v(" "+e._s(n.application)+" ")])],1)]:[n.appIcon?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-img",{
staticClass:"mr-1",attrs:{
src:"data:image/png;
base64,"+n.appIcon,alt:n.name+" icon",width:"25"}
}
)],1):e._e(),a("v-col",{
staticClass:"text-truncate"}
,[e._v(" "+e._s(n.application)+" ")])]],2)]}
}
,{
key:"item",fn:function(t){
var n=t.item,o=t.on,i=t.attrs;
return[a("v-row",{
staticClass:"text-truncate",attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[e.$store.getters.settings.allowMultipleOutputs?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-simple-checkbox",e._g(e._b({
attrs:{
value:e.selectedOutputs.includes(n)}
}
,"v-simple-checkbox",i,!1),o))],1):e._e(),n.appIcon?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-img",{
staticClass:"mr-1",attrs:{
src:"data:image/png;
base64,"+n.appIcon,alt:n.name+" icon",width:"25"}
}
)],1):e._e(),a("v-col",{
staticClass:"text-truncate"}
,[e._v(" "+e._s(e.getPrettyName(n))+" ")])],1)]}
}
]),model:{
value:e.selectedOutputs,callback:function(t){
e.selectedOutputs=t}
,expression:"selectedOutputs"}
}
)}
,Ce=[],Me=n["a"].extend({
name:"OutputSelection",computed:{
selectedOutputs:{
get:function(){
var e=this.$store.getters.selectedOutputs;
return this.$store.getters.settings.allowMultipleOutputs?e:0===e.length?null:e[0
]}
,set:function(e){
Array.isArray(e)?this.$store.dispatch("setSelectedOutputs",e):this.$store.dispat
ch("setSelectedOutputs",e?[e]:[])}
}
}
,methods:{
getPrettyName:D}
}
),Oe=Me,Pe=a("cc20"),je=a("b974"),$e=a("9e88"),ze=Object(j["a"])(Oe,_e,Ce,!1,nul
l,null,null),Ne=ze.exports;
z()(ze,{
VChip:Pe["a"],VCol:ie["a"],VImg:I["a"],VRow:E["a"],VSelect:je["a"],VSimpleCheckb
ox:$e["a"]}
);
var Fe=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("div",[a("v-tabs",{
attrs:{
"show-arrows":"","hide-slider":e.$store.getters.showFavorites}
,model:{
value:e.mutableActiveTabIndex,callback:function(t){
e.mutableActiveTabIndex=t}
,expression:"mutableActiveTabIndex"}
}
,[a("draggable",e._b({
staticClass:"v-slide-group__wrapper",on:{
start:e.startDrag,end:e.stopDrag}
,model:{
value:e.mutableTabs,callback:function(t){
e.mutableTabs=t}
,expression:"mutableTabs"}
}
,"draggable",{
animation:200,ghostClass:"ghost"}
,!1),e._l(e.$store.getters.tabs,(function(t,n){
return a("TabContextMenu",{
key:n,attrs:{
tab:t}
,scopedSlots:e._u([{
key:"default",fn:function(n){
var o=n.context;
return[a("v-tab",{
attrs:{
disabled:e.showFavorites}
,on:{
contextmenu:o}
}
,[e._v(" "+e._s(t.name)+" "),a("v-icon",{
staticStyle:{
cursor:"pointer"}
,attrs:{
right:"",small:"",color:"grey"}
,on:{
click:function(a){
return a.stopPropagation(),e.$store.commit("setTabToRemove",t)}
}
}
,[e._v(" mdi-close-circle ")])],1)]}
}
],null,!0)}
)}
)),1)],1),e.showFavorites?a("div",{
class:["v-tabs-items",e.$vuetify.theme.dark?"theme--dark":"theme--light"]}
,[0===e.favorites.sounds.length?a("NoFavoritesCard"):2===e.$store.getters.settin
gs.viewMode?a("LaunchpadView",{
attrs:{
tab:e.favorites}
}
):1===e.$store.getters.settings.viewMode?a("GridView",{
attrs:{
tab:e.favorites}
}
):a("ListView",{
attrs:{
tab:e.favorites}
}
)],1):a("div",[a("v-tabs-items",{
attrs:{
value:e.mutableActiveTabIndex}
}
,e._l(e.$store.getters.tabs,(function(t,n){
return a("v-tab-item",{
key:n}
,[0===t.sounds.length?a("NoSoundsCard"):2===e.$store.getters.settings.viewMode?a
("LaunchpadView",{
attrs:{
tab:t}
}
):1===e.$store.getters.settings.viewMode?a("GridView",{
attrs:{
tab:t}
}
):a("ListView",{
attrs:{
tab:t}
}
)],1)}
)),1)],1)],1)}
,Ie=[],Re=a("5530"),Le=a("b76a"),Be=a.n(Le),He=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("div",{
staticClass:"overflow-y-auto",staticStyle:{
height:"calc(100vh - 283px)"}
,attrs:{
id:"grid-view"}
}
,[a("v-row",{
attrs:{
"no-gutters":""}
}
,e._l(e.tab.sounds,(function(t,n){
return a("v-col",{
key:n,staticClass:"ma-2"}
,[a("SoundContextMenu",{
attrs:{
sound:t}
,scopedSlots:e._u([{
key:"default",fn:function(n){
var o=n.context;
return[a("v-btn",{
staticClass:"pa-2 text-none",attrs:{
id:"sound-"+t.id,block:"",height:"50"}
,on:{
click:function(a){
return e.$store.dispatch("playSound",t)}
,contextmenu:o}
}
,[e._v(" "+e._s(t.name)+" ")])]}
}
],null,!0)}
)],1)}
)),1)],1)}
,Ke=[],Ee=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-menu",{
attrs:{
absolute:"","position-x":e.x,"position-y":e.y,"offset-y":""}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
t.on;
var a=t.attrs;
return[e._t("default",(function(){
return[e._v("Default slot content")]}
),{
context:e.show}
,a)]}
}
],null,!0),model:{
value:e.showMenu,callback:function(t){
e.showMenu=t}
,expression:"showMenu"}
}
,[a("v-list",[0!==e.$store.getters.settings.viewMode?a("v-list-item",{
on:{
click:function(t){
return e.$store.commit("setSetHotkeySound",e.sound)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-keyboard")]),e._v(" "+e._s(e.$t("hotkeys.title"))+"… ")],1)],1):e.
_e(),a("v-list-item",{
on:{
click:function(t){
return e.$store.commit("setSetVolumeSound",e.sound)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-volume-source")]),e._v(" "+e._s(e.$t("customVolume.context"))+"… "
)],1)],1),0!==e.$store.getters.settings.viewMode?a("v-list-item",{
on:{
click:function(t){
return e.$store.dispatch("toggleFavorite",e.sound)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:"",color:e.sound.isFavorite?"red":""}
,domProps:{
textContent:e._s(e.sound.isFavorite?"mdi-heart":"mdi-heart-outline")}
}
),e._v(" "+e._s(e.$t("favorites.favorite"))+" ")],1)],1):e._e(),a("v-list-item",
{
on:{
click:function(t){
return e.$store.commit("setSoundToDelete",e.sound)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-delete-circle-outline")]),e._v(" "+e._s(e.$t("deleteSound.delete"))+
"… ")],1)],1)],1)],1)}
,Ge=[],Ue=n["a"].extend({
name:"SoundContextMenu",props:{
sound:{
type:Object,required:!0}
}
,data:function(){
return{
showMenu:!1,x:0,y:0}
}
,methods:{
show:function(e){
e.preventDefault(),this.x=e.clientX,this.y=e.clientY,this.showMenu=!0}
}
}
),We=Ue,qe=a("e449"),Je=Object(j["a"])(We,Ee,Ge,!1,null,null,null),Ye=Je.exports
;
z()(Je,{
VIcon:F["a"],VList:R["a"],VListItem:L["a"],VListItemTitle:B["c"],VMenu:qe["a"]}
);
var Ze=n["a"].extend({
name:"GridView",components:{
SoundContextMenu:Ye}
,props:{
tab:{
type:Object,required:!0}
}
}
),Qe=Ze,Xe=Object(j["a"])(Qe,He,Ke,!1,null,null,null),et=Xe.exports;
z()(Xe,{
VBtn:N["a"],VCol:ie["a"],VRow:E["a"]}
);
var tt=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-list",{
staticClass:"overflow-y-auto",staticStyle:{
height:"calc(100vh - 283px)"}
,attrs:{
id:"list-view"}
}
,[a("v-list-item-group",{
attrs:{
"active-class":"no-active"}
}
,e._l(e.tab.sounds,(function(t){
return a("div",{
key:t.id}
,[a("SoundContextMenu",{
attrs:{
sound:t}
,scopedSlots:e._u([{
key:"default",fn:function(n){
var o=n.context;
return[a("v-list-item",{
attrs:{
id:"sound-"+t.id}
,on:{
click:function(a){
return e.$store.dispatch("playSound",t)}
,contextmenu:o}
}
,[a("v-list-item-content",[a("v-list-item-title",[e._v(" "+e._s(t.name)+" ")]),a
("v-list-item-action-text",[e._v(" "+e._s(t.hotkeySequence)+" ")])],1),a("v-tool
tip",{
attrs:{
top:""}
,scopedSlots:e._u([{
key:"activator",fn:function(n){
var o=n.on,i=n.attrs;
return[a("v-btn",e._g(e._b({
attrs:{
icon:""}
,on:{
click:function(a){
return a.stopPropagation(),e.$store.dispatch("toggleFavorite",t)}
}
}
,"v-btn",i,!1),o),[a("v-icon",{
attrs:{
color:t.isFavorite?"red":""}
,domProps:{
textContent:e._s(t.isFavorite?"mdi-heart":"mdi-heart-outline")}
}
)],1)]}
}
],null,!0)}
,[a("span",[e._v(e._s(e.$t("favorites.favorite")))])]),a("v-tooltip",{
attrs:{
top:""}
,scopedSlots:e._u([{
key:"activator",fn:function(n){
var o=n.on,i=n.attrs;
return[a("v-btn",e._g(e._b({
attrs:{
icon:""}
,on:{
click:function(a){
return a.stopPropagation(),e.$store.commit("setSetHotkeySound",t)}
}
}
,"v-btn",i,!1),o),[a("v-icon",[e._v("mdi-keyboard")])],1)]}
}
],null,!0)}
,[a("span",[e._v(e._s(e.$t("hotkeys.title")))])])],1)]}
}
],null,!0)}
)],1)}
)),0)],1)}
,at=[],nt=n["a"].extend({
name:"ListView",components:{
SoundContextMenu:Ye}
,props:{
tab:{
type:Object,required:!0}
}
}
),ot=nt,it=(a("a0b5"),a("3a2f")),st=Object(j["a"])(ot,tt,at,!1,null,null,null),r
t=st.exports;
z()(st,{
VBtn:N["a"],VIcon:F["a"],VList:R["a"],VListItem:L["a"],VListItemActionText:B["a"
],VListItemContent:B["b"],VListItemGroup:Te["a"],VListItemTitle:B["c"],VTooltip:
it["a"]}
);
var lt=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("div",{
staticClass:"d-flex flex-column overflow-y-auto pt-3 px-3",staticStyle:{
height:"calc(100vh - 283px)"}
,attrs:{
id:"launchpad-view"}
}
,[a("div",{
directives:[{
name:"resize",rawName:"v-resize",value:e.updateColumns,expression:"updateColumns
"}
],staticClass:"launchpad-items"}
,e._l(e.paginatedSounds,(function(t,n){
return a("div",{
key:n}
,[a("SoundContextMenu",{
attrs:{
sound:t}
,scopedSlots:e._u([{
key:"default",fn:function(o){
var i=o.context;
return[a("v-btn",{
staticClass:"text-none text-truncate launchpad-button",attrs:{
id:"sound-"+t.id,block:"",height:"50",width:"150"}
,on:{
click:function(a){
return e.$store.dispatch("playSound",t)}
,contextmenu:i}
}
,[a("div",{
staticClass:"content"}
,[a("span",{
staticClass:"text"}
,[e._v(e._s(t.name))]),e.$store.getters.showFavorites?e._e():a("v-icon",{
staticClass:"favorite-indicator",attrs:{
color:t.isFavorite?"red":""}
,domProps:{
textContent:e._s(t.isFavorite?"mdi-heart":"mdi-heart-outline")}
}
),a("span",{
staticClass:"key-indicator"}
,[e._v(" "+e._s(e.keyboard[n])+" ")])],1)])]}
}
],null,!0)}
)],1)}
)),0),a("div",{
staticClass:"flex-grow-1"}
),a("div",{
staticClass:"text-center my-3"}
,[a("v-pagination",{
attrs:{
length:e.pagesCount,circle:""}
,model:{
value:e.page,callback:function(t){
e.page=t}
,expression:"page"}
}
)],1)])}
,ut=[],ct=(a("fb6a"),a("a15b"),n["a"].extend({
name:"LaunchpadView",components:{
SoundContextMenu:Ye}
,props:{
tab:{
type:Object,required:!0}
}
,data:function(){
return{
page:1,columns:1}
}
,computed:{
pagesCount:function(){
return Math.ceil(this.tab.sounds.length/this.perPage)}
,perPage:function(){
return 4*this.columns}
,paginatedSounds:function(){
return this.tab.sounds.slice(this.perPage*(this.page-1),this.perPage*this.page)}
,keyboard:function(){
var e=this,t=["1234567890","QWERTYUIOP","ASDFGHJKL;
","ZXCVBNM,./"];
return t.map((function(t){
return t.substr(0,e.columns)}
)).join("")}
}
,watch:{
tab:function(){
this.updateColumns()}
}
,mounted:function(){
document.addEventListener("keydown",this.keyDownHandler)}
,beforeDestroy:function(){
document.removeEventListener("keydown",this.keyDownHandler)}
,methods:{
updateColumns:function(){
var e=this.$el.querySelector(".launchpad-items");
e&&(this.columns=window.getComputedStyle(e,null).getPropertyValue("grid-template
-columns").split(" ").length,this.page>this.pagesCount&&(this.page=this.pagesCou
nt))}
,keyDownHandler:function(e){
var t=this;
if(this.$store.getters.showFavorites){
if(-1!==this.tab.id)return}
else if(this.tab.id!==this.$store.getters.activeTabIndex)return;
if(void 0===window.hotkeyReceived&&this.$store.getters.noModalOpen&&!e.ctrlKey&&
!e.shiftKey&&!e.altKey){
"ArrowLeft"===e.code?this.page>1&&(this.page--,this.updateColumns()):"ArrowRight
"===e.code&&this.page<this.pagesCount&&(this.page++,this.updateColumns());
var a,n=[],o=Object(r["a"])(this.keyboard);
try{
for(o.s();
!(a=o.n()).done;
){
var i=a.value;
isNaN(parseInt(i))?";
"===i?n.push("Semicolon"):","===i?n.push("Comma"):"."===i?n.push("Period"):"/"==
=i?n.push("Slash"):n.push("Key".concat(i)):n.push("Digit".concat(i))}
}
catch(s){
o.e(s)}
finally{
o.f()}
n.forEach((function(a,n){
if(e.code===a){
var o=t.paginatedSounds[n];
o&&t.$store.dispatch("playSound",o)}
}
))}
}
}
}
)),dt=ct,pt=(a("be0d"),a("891e")),mt=a("269a"),gt=a.n(mt),ht=a("dc22"),vt=Object
(j["a"])(dt,lt,ut,!1,null,null,null),ft=vt.exports;
z()(vt,{
VBtn:N["a"],VIcon:F["a"],VPagination:pt["a"]}
),gt()(vt,{
Resize:ht["a"]}
);
var kt=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return e.$store.getters.currentTab?a("v-card",{
staticClass:"no-sounds"}
,[a("v-card-title",[e._v(e._s(e.$t("empty.nothingToShow")))]),a("v-card-text",[a
("i18n",{
attrs:{
path:"empty.noSounds"}
}
,[a("code",{
attrs:{
slot:"path"}
,slot:"path"}
,[e._v(e._s(e.$store.getters.currentTab.path))])])],1)],1):e._e()}
,bt=[],yt=n["a"].extend({
name:"NoSoundsCard"}
),wt=yt,St=(a("e120"),a("b0af")),xt=a("99d9"),Tt=Object(j["a"])(wt,kt,bt,!1,null
,"071627b6",null),Vt=Tt.exports;
z()(Tt,{
VCard:St["a"],VCardText:xt["b"],VCardTitle:xt["c"]}
);
var At=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-card",{
staticClass:"no-favorites"}
,[a("v-card-title",[e._v(e._s(e.$t("empty.nothingToShow")))]),a("v-card-text",[e
._v(" "+e._s(e.$t("empty.noFavorites"))+" ")])],1)}
,Dt=[],_t=n["a"].extend({
name:"NoFavoritesCard"}
),Ct=_t,Mt=(a("b89c"),Object(j["a"])(Ct,At,Dt,!1,null,"5e934ef1",null)),Ot=Mt.ex
ports;
z()(Mt,{
VCard:St["a"],VCardText:xt["b"],VCardTitle:xt["c"]}
);
var Pt=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-menu",{
attrs:{
absolute:"","position-x":e.x,"position-y":e.y,"offset-y":""}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
t.on;
var a=t.attrs;
return[e._t("default",(function(){
return[e._v("Default slot content")]}
),{
context:e.show}
,a)]}
}
],null,!0),model:{
value:e.showMenu,callback:function(t){
e.showMenu=t}
,expression:"showMenu"}
}
,[a("v-list",[a("v-list-item",{
on:{
click:e.openFolder}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-folder")]),e._v(" "+e._s(e.$t("actions.openFolder"))+" ")],1)],1)],1
)],1)}
,jt=[],$t=n["a"].extend({
name:"TabContextMenu",props:{
tab:{
type:Object,required:!0}
}
,data:function(){
return{
showMenu:!1,x:0,y:0}
}
,methods:{
show:function(e){
e.preventDefault(),this.x=e.clientX,this.y=e.clientY,this.showMenu=!0}
,openFolder:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.openFolder(e.tab.id);
case 2:case"end":return t.stop()}
}
),t)}
)))()}
}
}
),zt=$t,Nt=Object(j["a"])(zt,Pt,jt,!1,null,null,null),Ft=Nt.exports;
z()(Nt,{
VIcon:F["a"],VList:R["a"],VListItem:L["a"],VListItemTitle:B["c"],VMenu:qe["a"]}
);
var It=n["a"].extend({
name:"SoundTabs",components:{
TabContextMenu:Ft,NoFavoritesCard:Ot,NoSoundsCard:Vt,LaunchpadView:ft,ListView:r
t,GridView:et,draggable:Be.a}
,data:function(){
return{
beforeDragActive:null}
}
,computed:Object(Re["a"])(Object(Re["a"])({
mutableTabs:{
get:function(){
return this.$store.getters.tabs}
,set:function(e){
this.$store.commit("setTabs",e)}
}
,mutableActiveTabIndex:{
get:function(){
return this.$store.getters.activeTabIndex}
,set:function(e){
this.$store.dispatch("setActiveTabIndex",e)}
}
}
,Object(l["b"])({
favorites:"favoritesTab"}
)),{
}
,{
showFavorites:{
get:function(){
return this.$store.getters.showFavorites}
,set:function(e){
this.$store.dispatch("setShowFavorites",e)}
}
}
),mounted:function(){
document.addEventListener("keydown",this.keyDownHandler)}
,beforeDestroy:function(){
document.removeEventListener("keydown",this.keyDownHandler)}
,methods:{
startDrag:function(){
this.beforeDragActive=this.$store.getters.currentTab}
,stopDrag:function(){
this.beforeDragActive&&this.$store.dispatch("setActiveTabIndex",this.$store.gett
ers.tabs.indexOf(this.beforeDragActive)),this.$store.dispatch("moveTabs")}
,keyDownHandler:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o,i,s,r;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:if(!t.$store.getters.noModalOpen){
a.next=17;
break}
if(!e.ctrlKey||e.shiftKey||e.altKey||"KeyR"!==e.code){
a.next=5;
break}
return e.preventDefault(),a.next=5,t.$store.dispatch("refreshTab");
case 5:if(e.ctrlKey||e.shiftKey||e.altKey){
a.next=17;
break}
if("Space"!==e.code){
a.next=16;
break}
if(n=t.$store.getters.currentPlayingSounds,!(n.length>0)){
a.next=14;
break}
return e.preventDefault(),a.next=12,window.toggleSoundPlayback();
case 12:o=a.sent,null!==o&&t.$store.commit("updateSoundPlayback",{
currentPlayingSounds:n,paused:o}
);
case 14:a.next=17;
break;
case 16:"ArrowUp"!==e.code&&"ArrowDown"!==e.code||(i=t.$store.getters.activeTabI
ndex,s=t.$store.getters.tabs.length-1,r=0,r="ArrowUp"===e.code?i>=s?0:i+1:i<=0?s
:i-1,t.$store.commit("setActiveTabIndex",r));
case 17:case"end":return a.stop()}
}
),a)}
)))()}
}
}
),Rt=It,Lt=(a("5178"),a("71a3")),Bt=a("c671"),Ht=a("fe57"),Kt=a("aac8"),Et=Objec
t(j["a"])(Rt,Fe,Ie,!1,null,null,null),Gt=Et.exports;
z()(Et,{
VIcon:F["a"],VTab:Lt["a"],VTabItem:Bt["a"],VTabs:Ht["a"],VTabsItems:Kt["a"]}
);
var Ut=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-card",{
staticClass:"no-tabs"}
,[a("v-card-title",[e._v(e._s(e.$t("welcome.title",{
programName:"Audiopad"}
)))]),a("v-card-text",[a("i18n",{
attrs:{
path:"welcome.noTabs"}
}
,[a("b",{
attrs:{
slot:"addTab"}
,slot:"addTab"}
,[e._v(e._s(e.$t("actions.addTab")))])]),a("br"),a("br"),e.$store.getters.isLinu
x?[e._v(" "+e._s(e.$t("welcome.linuxDetected"))+" "),a("br"),e._v(" "+e._s(e.$t(
"welcome.linuxGuide1"))+" "),a("br"),e._v(" "+e._s(e.$t("welcome.linuxGuide2"))+
" ")]:[e._v(" "+e._s(e.$t("welcome.windowsDetected"))+" "),a("br"),a("i18n",{
attrs:{
path:"welcome.windowsGuide1"}
}
,[a("a",{
attrs:{
slot:"seenOnWebsite"}
,on:{
click:e.openWindowsSetupPage}
,slot:"seenOnWebsite"}
,[e._v(" "+e._s(e.$t("welcome.windowsGuide2"))+" ")])])]],2)],1)}
,Wt=[],qt=n["a"].extend({
name:"NoTabsCard",methods:{
openWindowsSetupPage:function(){
y("https://audiopad.vercel.app/windows-setup")}
}
}
),Jt=qt,Yt=(a("e597"),Object(j["a"])(Jt,Ut,Wt,!1,null,"236be448",null)),Zt=Yt.ex
ports;
z()(Yt,{
VCard:St["a"],VCardText:xt["b"],VCardTitle:xt["c"]}
);
var Qt=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return e.$store.getters.updateData?a("v-dialog",{
attrs:{
"max-width":"600px",persistent:""}
,model:{
value:e.updateModal,callback:function(t){
e.updateModal=t}
,expression:"updateModal"}
}
,[a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-update")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("update.title")))])],1),a("v-card-text",[a("div",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-calendar-blank")]),e._v(" "+e._s(e.$t("update.yourVersion"))+": "+e.
_s(e.$store.getters.updateData.current)+" ")],1),a("div",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-calendar-plus")]),e._v(" "+e._s(e.$t("update.latestVersion"))+": "+e
._s(e.$store.getters.updateData.latest)+" ")],1)]),a("v-card-actions",[a("v-spac
er"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.updateModal=!1}
}
}
,[e._v(e._s(e.$t("update.ignore")))]),a("v-btn",{
attrs:{
color:"primary"}
,on:{
click:e.openDownloadPage}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cellphone-arrow-down")]),e._v(" "+e._s(e.$t("update.updateNow"))+" "
)],1)],1)],1)],1):e._e()}
,Xt=[],ea=n["a"].extend({
name:"UpdateModal",data:function(){
return{
updateModal:!1,unsubscribe:null}
}
,mounted:function(){
var e=this;
this.unsubscribe=this.$store.subscribe((function(t){
"setUpdateData"===t.type&&(e.updateModal=e.$store.getters.updateData.outdated)}
))}
,beforeDestroy:function(){
this.unsubscribe&&this.unsubscribe()}
,methods:{
openDownloadPage:function(){
y("https://audiopad.vercel.app/download")}
}
}
),ta=ea,aa=a("169a"),na=a("2fa4"),oa=Object(j["a"])(ta,Qt,Xt,!1,null,null,null),
ia=oa.exports;
z()(oa,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VDialog:aa["a"],VIcon:F["a"],VSpacer:na["a"]}
);
var sa=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("div",[a("v-row",{
staticClass:"flex-nowrap ml-3 mb-n2",attrs:{
"no-gutters":"",align:"center"}
}
,[a("v-divider",{
staticStyle:{
"clip-path":"inset(50% 0% 0% 0%)"}
,attrs:{
vertical:""}
}
),a("v-col",{
staticClass:"mr-1",attrs:{
cols:"auto"}
}
,[a("v-divider",{
staticStyle:{
width:"15px"}
}
)],1),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:""}
,domProps:{
textContent:e._s(e.volumeIcon(e.localVolume))}
}
)],1),a("v-col",{
staticClass:"text-truncate text--secondary hidden-xs-only",staticStyle:{
"flex-basis":"115px"}
,attrs:{
cols:"auto"}
}
,[e._v(" "+e._s(e.$t("volume.local"))+" ")]),a("v-col",[a("v-slider",{
class:{
"no-animation":e.dragRemote}
,attrs:{
dense:"","hide-details":"","thumb-label":e.$vuetify.breakpoint.smAndUp}
,on:{
start:function(t){
e.dragLocal=!0}
,end:function(t){
e.dragLocal=!1}
}
,model:{
value:e.localVolume,callback:function(t){
e.localVolume=t}
,expression:"localVolume"}
}
)],1)],1),a("v-tooltip",{
attrs:{
top:""}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
var n=t.on,o=t.attrs;
return[a("v-icon",e._g(e._b({
domProps:{
textContent:e._s(e.syncVolumes?"mdi-link":"mdi-link-off")}
,on:{
click:function(t){
e.syncVolumes=!e.syncVolumes}
}
}
,"v-icon",o,!1),n))]}
}
])}
,[a("span",[e._v(e._s(e.$t("volume.sync")))])]),a("v-row",{
staticClass:"flex-nowrap ml-3 mt-n2",attrs:{
"no-gutters":"",align:"center"}
}
,[a("v-divider",{
staticStyle:{
"clip-path":"inset(0% 0% 50% 0%)"}
,attrs:{
vertical:""}
}
),a("v-col",{
staticClass:"mr-1",attrs:{
cols:"auto"}
}
,[a("v-divider",{
staticStyle:{
width:"15px"}
}
)],1),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:""}
,domProps:{
textContent:e._s(e.volumeIcon(e.remoteVolume))}
}
)],1),a("v-col",{
staticClass:"text-truncate text--secondary hidden-xs-only",staticStyle:{
"flex-basis":"115px"}
,attrs:{
cols:"auto"}
}
,[e._v(" "+e._s(e.$t("volume.remote"))+" ")]),a("v-col",[a("v-slider",{
class:{
"no-animation":e.dragLocal}
,attrs:{
dense:"","hide-details":"",disabled:0===e.$store.getters.selectedOutputs.length&
&!e.$store.getters.settings.useAsDefaultDevice,"thumb-label":e.$vuetify.breakpoi
nt.smAndUp}
,on:{
start:function(t){
e.dragRemote=!0}
,end:function(t){
e.dragRemote=!1}
}
,model:{
value:e.remoteVolume,callback:function(t){
e.remoteVolume=t}
,expression:"remoteVolume"}
}
)],1)],1)],1)}
,ra=[],la=n["a"].extend({
name:"VolumeSliders",data:function(){
return{
dragLocal:!1,dragRemote:!1,wasRemoteLastUpdated:!1}
}
,computed:{
localVolume:{
get:function(){
return this.$store.getters.settings.localVolume}
,set:function(e){
this.$store.dispatch("setLocalVolume",e),this.wasRemoteLastUpdated=!1}
}
,remoteVolume:{
get:function(){
return this.$store.getters.settings.remoteVolume}
,set:function(e){
this.$store.dispatch("setRemoteVolume",e),this.wasRemoteLastUpdated=!0}
}
,syncVolumes:{
get:function(){
return this.$store.getters.settings.syncVolumes}
,set:function(e){
this.$store.commit("setSyncVolumes",e),this.$store.dispatch("saveSettings"),e&&(
this.wasRemoteLastUpdated?this.localVolume=this.remoteVolume:this.remoteVolume=t
his.localVolume)}
}
}
,watch:{
localVolume:function(e){
this.syncVolumes&&(this.remoteVolume=e)}
,remoteVolume:function(e){
this.syncVolumes&&(this.localVolume=e)}
}
,methods:{
volumeIcon:M}
}
),ua=la,ca=(a("02eb"),a("ce7e")),da=Object(j["a"])(ua,sa,ra,!1,null,null,null),p
a=da.exports;
z()(da,{
VCol:ie["a"],VDivider:ca["a"],VIcon:F["a"],VRow:E["a"],VSlider:se["a"],VTooltip:
it["a"]}
);
var ma=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("div",{
staticClass:"d-flex flex-column flex-nowrap fill-height"}
,[a("v-btn",{
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1"}
,on:{
click:function(t){
return e.$store.dispatch("addTab")}
}
}
,[a("v-icon",{
attrs:{
left:"",dark:""}
}
,[e._v("mdi-folder-plus")]),e._v(" "+e._s(e.$t("actions.addTab"))+" ")],1),a("v-
btn",{
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1",disabled:0===e.$sto
re.getters.tabs.length}
,on:{
click:function(t){
return e.$store.dispatch("refreshTab")}
}
}
,[a("v-icon",{
attrs:{
left:"",dark:""}
}
,[e._v("mdi-folder-refresh-outline")]),e._v(" "+e._s(e.$t("actions.reloadSounds"
))+" ")],1),a("DownloaderModal"),a("v-btn",{
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1"}
,on:{
click:function(t){
return e.$store.commit("setSearchModal",!0)}
}
}
,[a("v-icon",{
attrs:{
left:"",dark:""}
}
,[e._v("mdi-magnify")]),e._v(" "+e._s(e.$t("actions.search"))+" ")],1),a("v-menu
",{
attrs:{
"offset-y":"","close-on-content-click":""}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
var n=t.on,o=t.attrs;
return[a("v-btn",e._g(e._b({
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1",disabled:!e.$store.
getters.currentTab||e.$store.getters.showFavorites}
}
,"v-btn",o,!1),n),[e.$store.getters.currentTab?[0===e.$store.getters.currentTab.
sortMode?a("v-icon",{
attrs:{
left:""}
}
,[e._v(" mdi-sort-calendar-ascending ")]):1===e.$store.getters.currentTab.sortMo
de?a("v-icon",{
attrs:{
left:""}
}
,[e._v(" mdi-sort-calendar-descending ")]):2===e.$store.getters.currentTab.sortM
ode?a("v-icon",{
attrs:{
left:""}
}
,[e._v(" mdi-sort-alphabetical-ascending ")]):3===e.$store.getters.currentTab.so
rtMode?a("v-icon",{
attrs:{
left:""}
}
,[e._v(" mdi-sort-alphabetical-descending ")]):e._e()]:a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-sort-calendar-descending")]),e._v(" "+e._s(e.$t("sort.title"))+" ")]
,2)]}
}
])}
,[e.$store.getters.currentTab?a("v-list",[a("v-list-item-group",{
attrs:{
value:e.$store.getters.currentTab.sortMode}
}
,[a("v-list-item",{
on:{
click:function(t){
return e.$store.dispatch("setSortMode",0)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-sort-calendar-ascending")]),e._v(" "+e._s(e.$t("sort.modifiedAscendi
ng"))+" ")],1)],1),a("v-list-item",{
on:{
click:function(t){
return e.$store.dispatch("setSortMode",1)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-sort-calendar-descending")]),e._v(" "+e._s(e.$t("sort.modifiedDescen
ding"))+" ")],1)],1),a("v-list-item",{
on:{
click:function(t){
return e.$store.dispatch("setSortMode",2)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-sort-alphabetical-ascending")]),e._v(" "+e._s(e.$t("sort.alphabetica
lAscending"))+" ")],1)],1),a("v-list-item",{
on:{
click:function(t){
return e.$store.dispatch("setSortMode",3)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-sort-alphabetical-descending")]),e._v(" "+e._s(e.$t("sort.alphabetic
alDescending"))+" ")],1)],1)],1)],1):e._e()],1),a("v-btn",{
staticClass:"mb-2",attrs:{
color:e.$store.getters.showFavorites?"primary":e.$vuetify.theme.dark?"grey darke
n-3":"grey lighten-1"}
,on:{
click:function(t){
return e.$store.commit("setShowFavorites",!e.$store.getters.showFavorites)}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-heart")]),e._v(" "+e._s(e.$t("favorites.title"))+" ")],1),a("v-space
r"),a("v-menu",{
attrs:{
"offset-y":"","close-on-content-click":""}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
var n=t.on,o=t.attrs;
return[a("v-btn",e._g(e._b({
staticClass:"mb-2",attrs:{
color:e.$store.getters.playlistMode?"primary":e.$vuetify.theme.dark?"grey darken
-3":"grey lighten-1"}
}
,"v-btn",o,!1),n),[0===e.$store.getters.playlistMode?a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-playlist-remove")]):1===e.$store.getters.playlistMode?a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-playlist-music")]):2===e.$store.getters.playlistMode?a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-shuffle")]):e._e(),e._v(" "+e._s(e.$t("actions.playlistMode"))+" ")]
,1)]}
}
])}
,[a("v-list",[a("v-list-item-group",{
attrs:{
value:e.$store.getters.playlistMode}
}
,[a("v-list-item",{
on:{
click:function(t){
return e.$store.commit("setPlaylistMode",0)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-playlist-remove")]),e._v(" "+e._s(e.$t("actions.off"))+" ")],1)],1),
a("v-list-item",{
on:{
click:function(t){
return e.$store.commit("setPlaylistMode",1)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-playlist-music")]),e._v(" "+e._s(e.$t("actions.on"))+" ")],1)],1),a(
"v-list-item",{
on:{
click:function(t){
return e.$store.commit("setPlaylistMode",2)}
}
}
,[a("v-list-item-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-shuffle")]),e._v(" "+e._s(e.$t("actions.shuffle"))+" ")],1)],1)],1)]
,1)],1),e.$store.getters.isLinux?a("v-btn",{
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1"}
,on:{
click:function(t){
return e.$store.commit("setAppPassThroughDrawer",!0)}
}
}
,[a("v-icon",{
attrs:{
left:"",dark:""}
}
,[e._v("mdi-cable-data")]),e._v(" "+e._s(e.$t("actions.appPassThrough"))+" ")],1
):e._e(),a("SettingsModal"),a("SystemInfoModal"),a("HelpModal")],1)}
,ga=[],ha=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"750px"}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
var n=t.on,o=t.attrs;
return[a("v-btn",e._g(e._b({
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1"}
}
,"v-btn",o,!1),n),[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cog")]),e._v(" "+e._s(e.$t("settings.title"))+" ")],1)]}
}
]),model:{
value:e.settingsModal,callback:function(t){
e.settingsModal=t}
,expression:"settingsModal"}
}
,[a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cog")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("settings.title")))])],1),a("v-card-text",[a("v-row",{
attrs:{
justify:"center"}
}
,[a("div",{
staticClass:"settings-grid my-5 mx-3"}
,[a("v-select",{
staticClass:"ma-0",attrs:{
items:e.themes,"item-text":"name","item-value":"id",label:e.$t("settings.theme.t
itle"),"hide-details":"","prepend-icon":"mdi-theme-light-dark"}
,scopedSlots:e._u([{
key:"selection",fn:function(t){
var n=t.item;
return[a("v-row",{
attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[n.icon?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:""}
,domProps:{
textContent:e._s(n.icon)}
}
)],1):e._e(),a("v-col",[e._v(" "+e._s(n.name)+" ")])],1)]}
}
,{
key:"item",fn:function(t){
var n=t.item;
return[a("v-row",{
attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[n.icon?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:""}
,domProps:{
textContent:e._s(n.icon)}
}
)],1):e._e(),a("v-col",[e._v(" "+e._s(n.name)+" ")])],1)]}
}
]),model:{
value:e.theme,callback:function(t){
e.theme=t}
,expression:"theme"}
}
),a("v-select",{
staticClass:"ma-0",attrs:{
items:e.viewModes,"item-text":"name","item-value":"id",label:e.$t("settings.view
Mode.title"),"hide-details":"","prepend-icon":"mdi-eye"}
,scopedSlots:e._u([{
key:"selection",fn:function(t){
var n=t.item;
return[a("v-row",{
attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[n.icon?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:""}
,domProps:{
textContent:e._s(n.icon)}
}
)],1):e._e(),a("v-col",[e._v(" "+e._s(n.name)+" ")])],1)]}
}
,{
key:"item",fn:function(t){
var n=t.item;
return[a("v-row",{
attrs:{
dense:"","no-gutters":"",align:"center"}
}
,[n.icon?a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:""}
,domProps:{
textContent:e._s(n.icon)}
}
)],1):e._e(),a("v-col",[e._v(" "+e._s(n.name)+" ")])],1)]}
}
]),model:{
value:e.viewMode,callback:function(t){
e.viewMode=t}
,expression:"viewMode"}
}
),e.$store.getters.isLinux?[a("v-select",{
staticClass:"ma-0",attrs:{
items:e.audioBackends,"item-text":"name","item-value":"id",label:e.$t("settings.
audioBackend"),"hide-details":"","prepend-icon":"mdi-cast-audio"}
,model:{
value:e.audioBackend,callback:function(t){
e.audioBackend=t}
,expression:"audioBackend"}
}
),a("v-checkbox",{
staticClass:"ma-0",attrs:{
disabled:1===e.$store.getters.settings.audioBackend,label:e.$t("settings.useAsDe
faultDevice"),"hide-details":"","prepend-icon":"mdi-speaker"}
,model:{
value:e.useAsDefaultDevice,callback:function(t){
e.useAsDefaultDevice=t}
,expression:"useAsDefaultDevice"}
}
)]:e._e(),a("v-checkbox",{
staticClass:"ma-0",attrs:{
label:e.$t("settings.tabHotkeysOnly"),"hide-details":"","prepend-icon":"mdi-tab-
unselected"}
,model:{
value:e.tabHotkeysOnly,callback:function(t){
e.tabHotkeysOnly=t}
,expression:"tabHotkeysOnly"}
}
),a("v-checkbox",{
staticClass:"ma-0",attrs:{
label:e.$t("settings.allowOverlapping"),"hide-details":"","prepend-icon":"mdi-su
rround-sound"}
,model:{
value:e.allowOverlapping,callback:function(t){
e.allowOverlapping=t}
,expression:"allowOverlapping"}
}
),a("v-checkbox",{
staticClass:"ma-0",attrs:{
label:e.$t("settings.deleteToTrash"),"hide-details":"","prepend-icon":"mdi-delet
e-outline"}
,model:{
value:e.deleteToTrash,callback:function(t){
e.deleteToTrash=t}
,expression:"deleteToTrash"}
}
),a("v-checkbox",{
staticClass:"ma-0",attrs:{
disabled:!e.$store.getters.isLinux,label:e.$t("settings.allowMultipleOutputs"),"
hide-details":"","prepend-icon":"mdi-speaker-multiple"}
,model:{
value:e.allowMultipleOutputs,callback:function(t){
e.allowMultipleOutputs=t}
,expression:"allowMultipleOutputs"}
}
),a("v-checkbox",{
staticClass:"ma-0",attrs:{
label:e.$t("settings.muteDuringPlayback"),"hide-details":"","prepend-icon":"mdi-
volume-mute"}
,model:{
value:e.muteDuringPlayback,callback:function(t){
e.muteDuringPlayback=t}
,expression:"muteDuringPlayback"}
}
),a("v-checkbox",{
staticClass:"ma-0",attrs:{
label:e.$t("settings.minimizeToTray"),"hide-details":"","prepend-icon":"mdi-wind
ow-minimize"}
,model:{
value:e.minimizeToTray,callback:function(t){
e.minimizeToTray=t}
,expression:"minimizeToTray"}
}
),a("v-text-field",{
staticClass:"ma-0",attrs:{
id:"stopHotkeyField",label:e.$t("settings.stopHotkey"),"prepend-icon":"mdi-keybo
ard",readonly:"","append-icon":"mdi-close","hide-details":""}
,on:{
"click:append":e.clearStopHotkey,focus:e.focus,blur:e.blur}
,model:{
value:e.stopHotkey,callback:function(t){
e.stopHotkey=t}
,expression:"stopHotkey"}
}
),a("v-text-field",{
staticClass:"ma-0",attrs:{
id:"pushToTalkKeysField",label:e.$t("settings.pushToTalkKeys"),"prepend-icon":"m
di-keyboard-variant",readonly:"","append-icon":"mdi-close","hide-details":""}
,on:{
"click:append":e.clearPushToTalkKeys,focus:e.focus,blur:e.blur}
,model:{
value:e.pushToTalkKeys,callback:function(t){
e.pushToTalkKeys=t}
,expression:"pushToTalkKeys"}
}
),a("v-select",{
staticClass:"ma-0",attrs:{
items:e.languages,"item-text":"name","item-value":"locale",label:e.$t("settings.
language"),"hide-details":"","prepend-icon":"mdi-translate",clearable:""}
,model:{
value:e.language,callback:function(t){
e.language=t}
,expression:"language"}
}
)],2)])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
return e.$store.commit("setSystemInfoModal",!0)}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-desktop-mac-dashboard")]),e._v(" "+e._s(e.$t("systemInfo.title"))+" 
")],1),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.settingsModal=!1}
}
}
,[e._v("OK")])],1)],1)],1)}
,va=[],fa=(a("25f0"),n["a"].extend({
name:"SettingsModal",data:function(){
return{
settingsModal:!1,stopHotkey:"",pushToTalkKeys:""}
}
,computed:{
viewModes:function(){
return[{
id:0,name:this.$t("settings.viewMode.listView").toString(),icon:"mdi-view-list"}
,{
id:1,name:this.$t("settings.viewMode.gridView").toString(),icon:"mdi-grid"}
,{
id:2,name:this.$t("settings.viewMode.launchpadMode").toString(),icon:"mdi-gamepa
d"}
]}
,themes:function(){
return[{
id:0,name:this.$t("settings.theme.system").toString(),icon:"mdi-brightness-auto"
}
,{
id:1,name:this.$t("settings.theme.dark").toString(),icon:"mdi-brightness-4"}
,{
id:2,name:this.$t("settings.theme.light").toString(),icon:"mdi-brightness-6"}
]}
,audioBackends:function(){
return[{
id:1,name:"PipeWire"}
,{
id:2,name:"PulseAudio"}
]}
,languages:function(){
var e=this.$i18n.availableLocales;
return e.map((function(e,t){
var a=C(e);
return{
id:t,name:a,locale:e}
}
))}
,tabHotkeysOnly:{
get:function(){
return this.$store.getters.settings.tabHotkeysOnly}
,set:function(e){
this.$store.commit("setTabHotkeysOnly",e),this.$store.dispatch("saveSettings")}
}
,viewMode:{
get:function(){
return this.$store.getters.settings.viewMode}
,set:function(e){
this.$store.commit("setViewMode",e),this.$store.dispatch("saveSettings")}
}
,audioBackend:{
get:function(){
return this.$store.getters.settings.audioBackend}
,set:function(e){
this.$store.commit("setAudioBackend",e),this.$store.dispatch("saveSettings")}
}
,language:{
get:function(){
return this.$store.getters.settings.language}
,set:function(e){
this.$store.commit("setLanguage",e),this.$store.dispatch("saveSettings")}
}
,muteDuringPlayback:{
get:function(){
return this.$store.getters.settings.muteDuringPlayback}
,set:function(e){
this.$store.commit("setMuteDuringPlayback",e),this.$store.dispatch("saveSettings
")}
}
,allowOverlapping:{
get:function(){
return this.$store.getters.settings.allowOverlapping}
,set:function(e){
this.$store.commit("setAllowOverlapping",e),this.$store.dispatch("saveSettings")
}
}
,deleteToTrash:{
get:function(){
return this.$store.getters.settings.deleteToTrash}
,set:function(e){
this.$store.commit("setDeleteToTrash",e),this.$store.dispatch("saveSettings")}
}
,minimizeToTray:{
get:function(){
return this.$store.getters.settings.minimizeToTray}
,set:function(e){
this.$store.commit("setMinimizeToTray",e),this.$store.dispatch("saveSettings")}
}
,useAsDefaultDevice:{
get:function(){
return this.$store.getters.settings.useAsDefaultDevice}
,set:function(e){
this.$store.dispatch("setUseAsDefaultDevice",e)}
}
,allowMultipleOutputs:{
get:function(){
return this.$store.getters.settings.allowMultipleOutputs}
,set:function(e){
this.$store.commit("setAllowMultipleOutputs",e),this.$store.dispatch("saveSettin
gs")}
}
,theme:{
get:function(){
return this.$store.getters.settings.theme}
,set:function(e){
this.$store.commit("setTheme",e),this.$store.dispatch("saveSettings")}
}
}
,watch:{
settingsModal:function(e){
var t=this;
e?(window.hotkeyReceived=function(e,a){
var n=document.getElementById("stopHotkeyField"),o=document.getElementById("push
ToTalkKeysField"),i=document,s=i.activeElement;
s===n?(t.stopHotkey=e,t.$store.commit("setStopHotkey",a)):s===o&&(t.pushToTalkKe
ys=e,t.$store.commit("setPushToTalkKeys",a)),t.$store.dispatch("saveSettings")}
,this.updateHotkeySequences()):window.hotkeyReceived=void 0}
}
,methods:{
updateHotkeySequences:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.getHotkeySequence(e.$store.getters.settings.stopHo
tkey);
case 2:if(t.t0=t.sent,t.t0){
t.next=5;
break}
t.t0="";
case 5:return e.stopHotkey=t.t0,t.next=8,window.getHotkeySequence(e.$store.gette
rs.settings.pushToTalkKeys);
case 8:if(t.t1=t.sent,t.t1){
t.next=11;
break}
t.t1="";
case 11:e.pushToTalkKeys=t.t1;
case 12:case"end":return t.stop()}
}
),t)}
)))()}
,clearStopHotkey:function(){
this.stopHotkey="",this.$store.commit("setStopHotkey",[]),this.$store.dispatch("
saveSettings")}
,clearPushToTalkKeys:function(){
this.pushToTalkKeys="",this.$store.commit("setPushToTalkKeys",[]),this.$store.di
spatch("saveSettings")}
,focus:function(){
return Object(s["a"])(regeneratorRuntime.mark((function e(){
return regeneratorRuntime.wrap((function(e){
while(1)switch(e.prev=e.next){
case 0:return e.next=2,window.requestHotkey(!0);
case 2:case"end":return e.stop()}
}
),e)}
)))()}
,blur:function(){
return Object(s["a"])(regeneratorRuntime.mark((function e(){
return regeneratorRuntime.wrap((function(e){
while(1)switch(e.prev=e.next){
case 0:return e.next=2,window.requestHotkey(!1);
case 2:case"end":return e.stop()}
}
),e)}
)))()}
}
}
)),ka=fa,ba=(a("5e7c"),a("ac7c")),ya=a("8654"),wa=Object(j["a"])(ka,ha,va,!1,nul
l,"d1cec162",null),Sa=wa.exports;
z()(wa,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VCheckbox:ba["a"],VCol:ie["a"],VDialog:aa["a"],VIcon:F["a"],VRow:E["a"],VSel
ect:je["a"],VSpacer:na["a"],VTextField:ya["a"]}
);
var xa=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"600px"}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
var n=t.on,o=t.attrs;
return[a("v-btn",e._g(e._b({
attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1"}
}
,"v-btn",o,!1),n),[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-help-circle-outline")]),e._v(" "+e._s(e.$t("help.title"))+" ")],1)]}
}
]),model:{
value:e.helpModal,callback:function(t){
e.helpModal=t}
,expression:"helpModal"}
}
,[a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-help-circle-outline")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("help.title")))])],1),a("v-card-text",[a("ul",[a("i18n",{
attrs:{
path:"help.search.text",tag:"li"}
}
,[a("code",{
attrs:{
slot:"ctrl"}
,slot:"ctrl"}
,[e._v(e._s(e.$t("input.ctrl")))]),a("code",{
attrs:{
slot:"f"}
,slot:"f"}
,[e._v("F")]),a("b",{
attrs:{
slot:"search"}
,slot:"search"}
,[e._v(e._s(e.$t("help.search.search")))])]),e.$store.getters.isLinux?a("i18n",{
attrs:{
path:"help.appPassThrough.text",tag:"li"}
}
,[a("code",{
attrs:{
slot:"ctrl"}
,slot:"ctrl"}
,[e._v(e._s(e.$t("input.ctrl")))]),a("code",{
attrs:{
slot:"g"}
,slot:"g"}
,[e._v("G")]),a("b",{
attrs:{
slot:"show"}
,slot:"show"}
,[e._v(e._s(e.$t("help.appPassThrough.show")))])]):e._e(),a("i18n",{
attrs:{
path:"help.reloadSounds.text",tag:"li"}
}
,[a("code",{
attrs:{
slot:"ctrl"}
,slot:"ctrl"}
,[e._v(e._s(e.$t("input.ctrl")))]),a("code",{
attrs:{
slot:"r"}
,slot:"r"}
,[e._v("R")]),a("b",{
attrs:{
slot:"reload"}
,slot:"reload"}
,[e._v(e._s(e.$t("help.reloadSounds.reload")))])]),a("i18n",{
attrs:{
path:"help.togglePlayback.text",tag:"li"}
}
,[a("code",{
attrs:{
slot:"space"}
,slot:"space"}
,[e._v(e._s(e.$t("input.space")))]),a("b",{
attrs:{
slot:"playPause"}
,slot:"playPause"}
,[e._v(e._s(e.$t("help.togglePlayback.playPause")))])]),a("i18n",{
attrs:{
path:"help.play.text",tag:"li"}
}
,[a("code",{
attrs:{
slot:"leftClick"}
,slot:"leftClick"}
,[e._v(e._s(e.$t("input.leftClick")))]),a("b",{
attrs:{
slot:"play"}
,slot:"play"}
,[e._v(e._s(e.$t("help.play.play")))])]),a("i18n",{
attrs:{
path:"help.options.text",tag:"li"}
}
,[a("code",{
attrs:{
slot:"rightClick"}
,slot:"rightClick"}
,[e._v(e._s(e.$t("input.rightClick")))]),a("b",{
attrs:{
slot:"moreOptions"}
,slot:"moreOptions"}
,[e._v(e._s(e.$t("help.options.moreOptions")))])])],1),a("br"),a("div",[a("v-ico
n",{
attrs:{
left:""}
}
,[e._v("mdi-web")]),a("a",{
attrs:{
href:"#"}
,on:{
click:e.openWebsite}
}
,[e._v(e._s(e.$t("help.visitOurWebsite")))])],1),a("div",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-coffee-outline")]),a("a",{
attrs:{
href:"#"}
,on:{
click:e.openSupportUs}
}
,[e._v(e._s(e.$t("help.supportUs")))])],1),a("div",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-discord")]),a("a",{
attrs:{
href:"#"}
,on:{
click:e.openDiscord}
}
,[e._v(e._s(e.$t("help.joinOurDiscord")))])],1),a("div",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-github")]),a("a",{
attrs:{
href:"#"}
,on:{
click:e.openGitHub}
}
,[e._v(e._s(e.$t("help.viewSourceCode")))])],1)]),a("v-card-actions",[a("v-space
r"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.helpModal=!1}
}
}
,[e._v("OK")])],1)],1)],1)}
,Ta=[],Va=n["a"].extend({
name:"HelpModal",data:function(){
return{
helpModal:!1}
}
,methods:{
openSupportUs:function(){
y("https://ko-fi.com/Audiopad")}
,openWebsite:function(){
y("https://audiopad.vercel.app")}
,openDiscord:function(){
y("https://discord.gg/4HwSGN4Ec2")}
,openGitHub:function(){
y("https://github.com/audiopadapp")}
}
}
),Aa=Va,Da=(a("74bb"),Object(j["a"])(Aa,xa,Ta,!1,null,"c48e5952",null)),_a=Da.ex
ports;
z()(Da,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VDialog:aa["a"],VIcon:F["a"],VSpacer:na["a"]}
);
var Ca=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
persistent:e.loading,"max-width":"850px"}
,scopedSlots:e._u([{
key:"activator",fn:function(t){
var n=t.on,o=t.attrs;
return[a("v-btn",e._g(e._b({
staticClass:"mb-2",attrs:{
color:e.$vuetify.theme.dark?"grey darken-3":"grey lighten-1",disabled:!e.$store.
getters.currentTab||e.$store.getters.showFavorites}
}
,"v-btn",o,!1),n),[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-download")]),e._v(" "+e._s(e.$t("downloader.title"))+" ")],1)]}
}
]),model:{
value:e.downloaderModal,callback:function(t){
e.downloaderModal=t}
,expression:"downloaderModal"}
}
,[a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-download")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("downloader.title")))])],1),e.isYoutubeDLAvailable?[a("v-card-t
ext",[e.loading?e._e():a("v-text-field",{
directives:[{
name:"debounce",rawName:"v-debounce:300",value:e.updateInfoCard,expression:"upda
teInfoCard",arg:"300"}
],attrs:{
label:e.$t("downloader.placeholder"),"hide-details":"",filled:"",autofocus:"","p
repend-inner-icon":"mdi-link",loading:e.fetchingInfo}
,model:{
value:e.inputText,callback:function(t){
e.inputText=t}
,expression:"inputText"}
}
),e.info?a("v-card",{
staticClass:"mt-3",attrs:{
outlined:""}
}
,[a("v-card-title",[e._v(e._s(e.info.title))]),a("v-card-text",[a("v-row",{
attrs:{
justify:"center"}
}
,[e.info.thumbnails?a("v-img",{
attrs:{
src:e.info.thumbnails[e.info.thumbnails.length-1].url,height:"300",contain:""}
}
):e._e()],1),e.info.uploader?a("v-row",{
staticClass:"text-h5",attrs:{
justify:"center"}
}
,[e._v(" "+e._s(e.info.uploader)+" ")]):e._e()],1)],1):e._e(),e.loading?a("v-car
d",{
staticClass:"mt-3",attrs:{
outlined:""}
}
,[a("v-card-title",[e._v(e._s(e.$t("downloader.progress"))+": "+e._s(e.progress.
toFixed(2))+"%")]),a("v-card-text",[a("v-progress-linear",{
attrs:{
value:e.progress,indeterminate:100===e.progress,stream:e.progress<100,"buffer-va
lue":"0"}
}
),100===e.progress?a("div",[e._v(e._s(e.$t("downloader.converting"))+"…")]):e.
eta?a("div",[e._v(e._s(e.$t("downloader.eta"))+": "+e._s(e.eta))]):e._e()],1)],1
):e._e()],1),a("v-card-actions",[a("v-spacer"),e.loading?a("v-btn",{
attrs:{
text:"",color:"primary",disabled:100===e.progress}
,on:{
click:e.cancel}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cancel")]),e._v(" "+e._s(e.$t("downloader.cancelDownload"))+" ")],1)
:a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.downloaderModal=!1}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-close")]),e._v(" "+e._s(e.$t("downloader.close"))+" ")],1),a("v-btn"
,{
attrs:{
color:"primary",disabled:!e.inputText||e.loading||!e.info}
,on:{
click:e.submit}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-download")]),e._v(" "+e._s(e.$t("downloader.startDownload"))+" ")],1
)],1)]:[a("v-card-text",[a("v-alert",{
attrs:{
text:"",type:"error"}
}
,[a("i18n",{
attrs:{
path:"downloader.notAvailable",tag:"span"}
}
,[a("code",{
attrs:{
slot:"youtube-dl"}
,slot:"youtube-dl"}
,[e._v("youtube-dl")]),a("code",{
attrs:{
slot:"ffmpeg"}
,slot:"ffmpeg"}
,[e._v("ffmpeg")])])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.downloaderModal=!1}
}
}
,[e._v(" "+e._s(e.$t("downloader.close"))+" ")]),a("v-btn",{
attrs:{
color:"primary"}
,on:{
click:e.installNow}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-auto-fix")]),e._v(" "+e._s(e.$t("downloader.installNow"))+" ")],1)],
1)]],2)],1)}
,Ma=[],Oa=n["a"].extend({
name:"DownloaderModal",data:function(){
return{
isYoutubeDLAvailable:!1,downloaderModal:!1,inputText:"",fetchingInfo:!1,loading:
!1,info:null,progress:0,eta:""}
}
,mounted:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.isYoutubeDLAvailable();
case 2:a=t.sent,a&&(e.isYoutubeDLAvailable=a),window.downloadProgressed=function
(t,a){
e.progress=t,e.eta=a}
;
case 5:case"end":return t.stop()}
}
),t)}
)))()}
,beforeDestroy:function(){
window.downloadProgressed=void 0}
,methods:{
reset:function(){
this.loading=!1,this.progress=0,this.eta="",this.inputText="",this.info=null}
,installNow:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,y("https://github.com/audiopadapp/Audiopad/wiki/Downloader-sup
port");
case 2:e.downloaderModal=!1;
case 3:case"end":return t.stop()}
}
),t)}
)))()}
,updateInfoCard:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:if(e){
a.next=3;
break}
return t.info=null,a.abrupt("return");
case 3:return t.fetchingInfo=!0,a.prev=4,a.next=7,window.getYoutubeDLInfo(e);
case 7:n=a.sent,t.info=n||null,a.next=15;
break;
case 11:a.prev=11,a.t0=a["catch"](4),console.error(a.t0),t.info=null;
case 15:t.fetchingInfo=!1;
case 16:case"end":return a.stop()}
}
),a,null,[[4,11]])}
)))()}
,submit:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a,n;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return e.loading=!0,t.prev=1,t.next=4,window.startYoutubeDLDownload(e.inp
utText);
case 4:if(a=t.sent,!a){
t.next=9;
break}
return t.next=8,e.$store.dispatch("refreshTab");
case 8:e.$toast.success(e.$t("downloader.success",{
title:(null===(n=e.info)||void 0===n?void 0:n.title)||""}
));
case 9:t.next=14;
break;
case 11:t.prev=11,t.t0=t["catch"](1),console.error(t.t0);
case 14:e.reset();
case 15:case"end":return t.stop()}
}
),t,null,[[1,11]])}
)))()}
,cancel:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return e.reset(),t.next=3,window.stopYoutubeDLDownload();
case 3:case"end":return t.stop()}
}
),t)}
)))()}
}
}
),Pa=Oa,ja=a("0798"),$a=a("8e36"),za=Object(j["a"])(Pa,Ca,Ma,!1,null,null,null),
Na=za.exports;
z()(za,{
VAlert:ja["a"],VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],
VCardTitle:xt["c"],VDialog:aa["a"],VIcon:F["a"],VImg:I["a"],VProgressLinear:$a["
a"],VRow:E["a"],VSpacer:na["a"],VTextField:ya["a"]}
);
var Fa=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"600px"}
,model:{
value:e.systemInfoModal,callback:function(t){
e.systemInfoModal=t}
,expression:"systemInfoModal"}
}
,[a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-desktop-mac-dashboard")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("systemInfo.title")))])],1),a("v-card-text",[a("v-alert",{
attrs:{
dense:"",type:"info"}
}
,[e._v(" "+e._s(e.$t("systemInfo.description"))+" ")]),a("v-textarea",{
attrs:{
id:"systemInfoArea",value:e.systemInfo,readonly:"",dense:"",filled:""}
}
),a("v-row",{
attrs:{
justify:"center"}
}
,[a("v-btn",{
attrs:{
large:"",color:"primary"}
,on:{
click:e.copyToClipboard}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-clipboard")]),e._v(" "+e._s(e.$t("systemInfo.copyToClipboard"))+" ")
],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.systemInfoModal=!1}
}
}
,[e._v("OK")])],1)],1)],1)}
,Ia=[],Ra=n["a"].extend({
name:"SystemInfoModal",data:function(){
return{
systemInfo:""}
}
,computed:{
systemInfoModal:{
get:function(){
return this.$store.getters.systemInfoModal}
,set:function(e){
this.$store.commit("setSystemInfoModal",e)}
}
}
,watch:{
systemInfoModal:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:if(!e.systemInfoModal){
t.next=7;
break}
return t.next=3,window.getSystemInfo();
case 3:if(t.t0=t.sent,t.t0){
t.next=6;
break}
t.t0="Failed to fetch system information";
case 6:e.systemInfo=t.t0;
case 7:case"end":return t.stop()}
}
),t)}
)))()}
}
,methods:{
copyToClipboard:function(){
var e=document.getElementById("systemInfoArea");
e&&(e.select(),document.execCommand("copy"))}
}
}
),La=Ra,Ba=a("a844"),Ha=Object(j["a"])(La,Fa,Ia,!1,null,null,null),Ka=Ha.exports
;
z()(Ha,{
VAlert:ja["a"],VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],
VCardTitle:xt["c"],VDialog:aa["a"],VIcon:F["a"],VRow:E["a"],VSpacer:na["a"],VTex
tarea:Ba["a"]}
);
var Ea=n["a"].extend({
name:"SideButtons",components:{
SystemInfoModal:Ka,DownloaderModal:Na,HelpModal:_a,SettingsModal:Sa}
}
),Ga=Ea,Ua=Object(j["a"])(Ga,ma,ga,!1,null,null,null),Wa=Ua.exports;
z()(Ua,{
VBtn:N["a"],VIcon:F["a"],VList:R["a"],VListItem:L["a"],VListItemGroup:Te["a"],VL
istItemTitle:B["c"],VMenu:qe["a"],VSpacer:na["a"]}
);
var qa=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"600px"}
,model:{
value:e.setHotkeyModal,callback:function(t){
e.setHotkeyModal=t}
,expression:"setHotkeyModal"}
}
,[e.sound?a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-keyboard")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("hotkeys.setFor",{
soundName:e.sound.name}
)))])],1),a("v-card-text",[a("v-text-field",{
attrs:{
id:"hotkeyField",value:e.sound.hotkeySequence,label:e.$t("hotkeys.hotkey"),reado
nly:"","append-icon":"mdi-close","hide-details":""}
,on:{
"click:append":e.reset,focus:e.focus,blur:e.blur}
}
)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.setHotkeyModal=!1}
}
}
,[e._v("OK")])],1)],1):e._e()],1)}
,Ja=[],Ya=n["a"].extend({
name:"SetHotkeyModal",computed:Object(Re["a"])(Object(Re["a"])({
}
,Object(l["b"])({
sound:"setHotkeySound"}
)),{
}
,{
setHotkeyModal:{
get:function(){
return this.$store.getters.setHotkeyModal}
,set:function(e){
this.$store.commit("setSetHotkeyModal",e)}
}
}
),watch:{
setHotkeyModal:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:if(!e||!t.sound){
a.next=14;
break}
return a.t0=t.$store,a.t1=t.sound,a.next=5,window.getHotkeySequence(t.sound.hotk
eys);
case 5:if(a.t2=a.sent,a.t2){
a.next=8;
break}
a.t2="";
case 8:a.t3=a.t2,a.t4={
sound:a.t1,hotkeySequence:a.t3}
,a.t0.commit.call(a.t0,"setHotkeySequence",a.t4),window.hotkeyReceived=function(
e,a){
t.$store.commit("setHotkeySequence",{
sound:t.sound,hotkeySequence:e}
),t.$store.dispatch("setHotkeys",{
sound:t.sound,hotkeys:a}
)}
,a.next=15;
break;
case 14:window.hotkeyReceived=void 0;
case 15:t.setHotkeyModal&&requestAnimationFrame((function(){
var e=document.getElementById("hotkeyField");
e.focus()}
));
case 16:case"end":return a.stop()}
}
),a)}
)))()}
}
,methods:{
reset:function(){
this.$store.commit("setHotkeySequence",{
sound:this.sound,hotkeySequence:""}
),this.$store.dispatch("setHotkeys",{
sound:this.sound,hotkeys:[]}
)}
,focus:function(){
return Object(s["a"])(regeneratorRuntime.mark((function e(){
return regeneratorRuntime.wrap((function(e){
while(1)switch(e.prev=e.next){
case 0:return e.next=2,window.requestHotkey(!0);
case 2:case"end":return e.stop()}
}
),e)}
)))()}
,blur:function(){
return Object(s["a"])(regeneratorRuntime.mark((function e(){
return regeneratorRuntime.wrap((function(e){
while(1)switch(e.prev=e.next){
case 0:return e.next=2,window.requestHotkey(!1);
case 2:case"end":return e.stop()}
}
),e)}
)))()}
}
}
),Za=Ya,Qa=Object(j["a"])(Za,qa,Ja,!1,null,null,null),Xa=Qa.exports;
z()(Qa,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VDialog:aa["a"],VIcon:F["a"],VSpacer:na["a"],VTextField:ya["a"]}
);
var en=function(){
var e=this,t=e.$createElement,n=e._self._c||t;
return n("v-dialog",{
attrs:{
"hide-overlay":"",transition:"scroll-y-transition","max-width":"75vw",scrollable
:""}
,on:{
keydown:e.dialogKeyDown}
,model:{
value:e.searchModal,callback:function(t){
e.searchModal=t}
,expression:"searchModal"}
}
,[n("v-card",{
attrs:{
flat:"",height:"500"}
}
,[n("v-card-title",[n("v-text-field",{
attrs:{
id:"searchField",label:e.$t("actions.search")+"…","hide-details":"",tabindex:"
-1",clearable:"","prepend-icon":"mdi-magnify"}
,on:{
input:e.resetSelectedIndex}
,model:{
value:e.searchInput,callback:function(t){
e.searchInput=t}
,expression:"searchInput"}
}
)],1),n("v-card-text",{
attrs:{
id:"cardBody"}
}
,[e.searchInput&&e.searchResults.length>0?n("v-list",{
staticClass:"fill-height",attrs:{
nav:"",dense:""}
}
,[n("v-list-item-group",{
attrs:{
id:"searchResults",value:e.selectedResultIndex}
}
,e._l(e.searchResults,(function(t,a){
return n("v-list-item",{
key:t.id,attrs:{
tabindex:"-1",value:a}
,on:{
click:function(a){
return e.jumpToSound(t)}
}
}
,[n("v-list-item-title",{
staticClass:"text-wrap"}
,[e._v(e._s(t.name))]),n("v-spacer"),n("v-icon",{
on:{
click:function(a){
return a.stopPropagation(),e.$store.dispatch("playSound",t)}
}
}
,[e._v("mdi-play")])],1)}
)),1)],1):e.searchInput||0!==e.searchResults.length?[n("v-row",{
staticClass:"mx-5 mt-6",attrs:{
justify:"center"}
}
,[n("v-img",{
attrs:{
src:a("a43b"),height:"220",contain:""}
}
)],1),n("v-row",{
staticClass:"mt-7",attrs:{
justify:"center"}
}
,[n("span",[e._v(e._s(e.$t("search.noResultsFound")))])])]:[n("v-row",{
staticClass:"mx-5 mt-6",attrs:{
justify:"center"}
}
,[n("v-img",{
attrs:{
src:a("9c08"),height:"220",contain:""}
}
)],1),n("v-row",{
staticClass:"mt-7",attrs:{
justify:"center"}
}
,[n("span",[e._v(e._s(e.$t("search.typeToSearch")))])]),n("v-row",{
staticClass:"mt-6",attrs:{
justify:"center"}
}
,[n("v-alert",{
staticClass:"text-subtitle-2",attrs:{
text:"",dense:""}
}
,[n("i18n",{
attrs:{
path:"search.changeSelection",tag:"div"}
}
,[n("code",{
attrs:{
slot:"arrowKeys"}
,slot:"arrowKeys"}
,[e._v(e._s(e.$t("input.arrowKeys")))])]),n("i18n",{
attrs:{
path:"search.jumpToSelected",tag:"div"}
}
,[n("code",{
attrs:{
slot:"enter"}
,slot:"enter"}
,[e._v(e._s(e.$t("input.enter")))])]),n("i18n",{
attrs:{
path:"search.playSelected",tag:"div"}
}
,[n("code",{
attrs:{
slot:"shift"}
,slot:"shift"}
,[e._v(e._s(e.$t("input.shift")))]),n("code",{
attrs:{
slot:"enter"}
,slot:"enter"}
,[e._v(e._s(e.$t("input.enter")))])])],1)],1),n("v-row",{
staticClass:"mt-3",attrs:{
justify:"center"}
}
),n("v-row",{
staticClass:"mt-3",attrs:{
justify:"center"}
}
)]],2)],1)],1)}
,tn=[],an=(a("841c"),a("6062")),nn=n["a"].extend({
name:"SearchModal",data:function(){
return{
searchInput:"",selectedResultIndex:0,fuse:null,unsubscribe:null}
}
,computed:{
searchModal:{
get:function(){
return this.$store.getters.searchModal}
,set:function(e){
this.$store.commit("setSearchModal",e)}
}
,searchResults:function(){
if(!this.searchInput||!this.fuse)return[];
var e=this.fuse.search(this.searchInput);
return e.map((function(e){
var t=e.item;
return t}
)).slice(0,Math.min(e.length,20))}
}
,watch:{
searchModal:function(){
var e=this;
this.searchModal&&requestAnimationFrame((function(){
var t=document.getElementById("searchField");
t.focus(),e.searchInput&&t.select()}
))}
,selectedResultIndex:function(){
this.scrollSelectedIntoView()}
}
,mounted:function(){
var e=this;
document.addEventListener("keydown",this.keyDownHandler),this.fuse=new an["a"](t
his.$store.getters.allSounds,{
keys:["name"]}
),this.unsubscribe=this.$store.subscribe((function(t){
"setTabs"!==t.type&&"addTab"!==t.type&&"setTabSounds"!==t.type||(e.resetSelected
Index(),e.fuse=new an["a"](e.$store.getters.allSounds,{
keys:["name"]}
))}
))}
,beforeDestroy:function(){
document.removeEventListener("keydown",this.keyDownHandler),this.unsubscribe&&th
is.unsubscribe()}
,methods:{
keyDownHandler:function(e){
!e.ctrlKey||e.shiftKey||e.altKey||"KeyF"!==e.code||(e.preventDefault(),this.sear
chModal=!this.searchModal)}
,resetSelectedIndex:function(){
var e=this;
this.selectedResultIndex=-1,requestAnimationFrame((function(){
e.selectedResultIndex=0}
))}
,scrollSelectedIntoView:function(){
var e=document.getElementById("searchResults");
if(e){
var t=e.childNodes[this.selectedResultIndex],a=document.getElementById("cardBody
");
t&&a&&this.$vuetify.goTo(t,{
container:a,duration:100,offset:176}
)}
}
,dialogKeyDown:function(e){
if(this.searchModal)if("ArrowDown"===e.key)e.preventDefault(),this.selectedResul
tIndex<this.searchResults.length-1&&this.selectedResultIndex++;
else if("ArrowUp"===e.key)e.preventDefault(),this.selectedResultIndex>0&&this.se
lectedResultIndex--;
else if("Enter"===e.key){
e.preventDefault();
var t=this.searchResults[this.selectedResultIndex];
e.shiftKey?this.$store.dispatch("playSound",t):this.jumpToSound(t)}
}
,jumpToSound:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n,o,i,s,l,u;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:n=t.$store.getters.tabs,o=Object(r["a"])(n),a.prev=2,o.s();
case 4:if((i=o.n()).done){
a.next=14;
break}
if(s=i.value,l=s.sounds,!l.includes(e)){
a.next=12;
break}
return a.delegateYield(regeneratorRuntime.mark((function a(){
var o,i,r;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:if(o=n.indexOf(s),t.$store.getters.activeTabIndex===o){
a.next=4;
break}
return a.next=4,t.$store.dispatch("setActiveTabIndex",o);
case 4:if(t.searchModal=!1,i=document.getElementById("sound-".concat(e.id)),!i){
a.next=21;
break}
if(t.$store.getters.settings.viewMode!==f.EmulatedLaunchpad){
a.next=12;
break}
return a.next=10,t.$vuetify.goTo(i,{
container:document.getElementById("launchpad-view")}
);
case 10:a.next=19;
break;
case 12:if(t.$store.getters.settings.viewMode!==f.Grid){
a.next=17;
break}
return a.next=15,t.$vuetify.goTo(i,{
container:document.getElementById("grid-view")}
);
case 15:a.next=19;
break;
case 17:return a.next=19,t.$vuetify.goTo(i,{
container:document.getElementById("list-view")}
);
case 19:i.classList.add("highlight"),e.animationEvent||(r=function(){
i.classList.remove("highlight")}
,i.addEventListener("animationend",r),e.animationEvent=r);
case 21:return a.abrupt("return","break");
case 22:case"end":return a.stop()}
}
),a)}
))(),"t0",9);
case 9:if(u=a.t0,"break"!==u){
a.next=12;
break}
return a.abrupt("break",14);
case 12:a.next=4;
break;
case 14:a.next=19;
break;
case 16:a.prev=16,a.t1=a["catch"](2),o.e(a.t1);
case 19:return a.prev=19,o.f(),a.finish(19);
case 22:case"end":return a.stop()}
}
),a,null,[[2,16,19,22]])}
)))()}
}
}
),on=nn,sn=Object(j["a"])(on,en,tn,!1,null,null,null),rn=sn.exports;
z()(sn,{
VAlert:ja["a"],VCard:St["a"],VCardText:xt["b"],VCardTitle:xt["c"],VDialog:aa["a"
],VIcon:F["a"],VImg:I["a"],VList:R["a"],VListItem:L["a"],VListItemGroup:Te["a"],
VListItemTitle:B["c"],VRow:E["a"],VSpacer:na["a"],VTextField:ya["a"]}
);
var ln=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"600px"}
,model:{
value:e.modal,callback:function(t){
e.modal=t}
,expression:"modal"}
}
,[e.tab?a("v-card",[a("v-card-title",[e._v(e._s(e.$t("actions.confirmation")))])
,a("v-card-text",[a("i18n",{
attrs:{
path:"removeTab.question"}
}
,[a("code",{
attrs:{
slot:"tabName"}
,slot:"tabName"}
,[e._v(e._s(e.tab.name))])])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
color:"red",dark:""}
,on:{
click:function(t){
return e.$store.dispatch("removeTab",e.tab)}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-delete-alert")]),e._v(" "+e._s(e.$t("actions.yes"))+" ")],1),a("v-bt
n",{
attrs:{
color:"primary"}
,on:{
click:function(t){
e.modal=!1}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-delete-off")]),e._v(" "+e._s(e.$t("actions.no"))+" ")],1)],1)],1):e.
_e()],1)}
,un=[],cn=n["a"].extend({
name:"RemoveTabModal",computed:{
tab:{
get:function(){
return this.$store.getters.tabToRemove}
,set:function(e){
this.$store.commit("setTabToRemove",e)}
}
,modal:{
get:function(){
return this.$store.getters.removeTabModal}
,set:function(e){
this.$store.commit("setRemoveTabModal",e)}
}
}
}
),dn=cn,pn=Object(j["a"])(dn,ln,un,!1,null,null,null),mn=pn.exports;
z()(pn,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VDialog:aa["a"],VIcon:F["a"],VSpacer:na["a"]}
);
var gn=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"600px"}
,model:{
value:e.modal,callback:function(t){
e.modal=t}
,expression:"modal"}
}
,[e.sound?a("v-card",[a("v-card-title",[e._v(e._s(e.$t("actions.confirmation")))
]),a("v-card-text",[a("i18n",{
attrs:{
path:"deleteSound.question"}
}
,[a("code",{
attrs:{
slot:"soundName"}
,slot:"soundName"}
,[e._v(e._s(e.sound.name))])])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
color:"red",dark:""}
,on:{
click:function(t){
return e.$store.dispatch("deleteSound",e.sound)}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-delete-alert")]),e._v(" "+e._s(e.$t("actions.yes"))+" ")],1),a("v-bt
n",{
attrs:{
color:"primary"}
,on:{
click:function(t){
e.modal=!1}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-delete-off")]),e._v(" "+e._s(e.$t("actions.no"))+" ")],1)],1)],1):e.
_e()],1)}
,hn=[],vn=n["a"].extend({
name:"DeleteSoundModal",computed:{
sound:{
get:function(){
return this.$store.getters.soundToDelete}
,set:function(e){
this.$store.commit("setSoundToDelete",e)}
}
,modal:{
get:function(){
return this.$store.getters.deleteSoundModal}
,set:function(e){
this.$store.commit("setDeleteSoundModal",e)}
}
}
}
),fn=vn,kn=Object(j["a"])(fn,gn,hn,!1,null,null,null),bn=kn.exports;
z()(kn,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VDialog:aa["a"],VIcon:F["a"],VSpacer:na["a"]}
);
var yn=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
"max-width":"600px"}
,model:{
value:e.setVolumeModal,callback:function(t){
e.setVolumeModal=t}
,expression:"setVolumeModal"}
}
,[e.sound?a("v-card",[a("v-card-title",[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-volume-source")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("customVolume.setFor",{
soundName:e.sound.name}
)))])],1),a("v-card-text",[a("v-row",{
staticClass:"flex-nowrap",attrs:{
"no-gutters":"",align:"center"}
}
,[a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-checkbox",{
staticClass:"ma-0",attrs:{
"hide-details":""}
,model:{
value:e.enableLocalVolume,callback:function(t){
e.enableLocalVolume=t}
,expression:"enableLocalVolume"}
}
)],1),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:"",disabled:null===e.sound.localVolume}
,domProps:{
textContent:e._s(e.volumeIcon(e.sound.localVolume))}
}
)],1),a("v-col",{
staticClass:"text-truncate text--secondary hidden-xs-only",staticStyle:{
"flex-basis":"115px"}
,attrs:{
cols:"auto"}
}
,[e._v(" "+e._s(e.$t("volume.local"))+" ")]),a("v-col",[e.enableLocalVolume?a("v
-slider",{
attrs:{
dense:"","hide-details":"",disabled:null===e.sound.localVolume,"thumb-label":e.$
vuetify.breakpoint.smAndUp}
,model:{
value:e.localVolume,callback:function(t){
e.localVolume=t}
,expression:"localVolume"}
}
):a("v-slider",{
attrs:{
dense:"","hide-details":"",disabled:""}
}
)],1)],1),a("v-row",{
staticClass:"flex-nowrap",attrs:{
"no-gutters":"",align:"center"}
}
,[a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-checkbox",{
staticClass:"ma-0",attrs:{
"hide-details":""}
,model:{
value:e.enableRemoteVolume,callback:function(t){
e.enableRemoteVolume=t}
,expression:"enableRemoteVolume"}
}
)],1),a("v-col",{
attrs:{
cols:"auto"}
}
,[a("v-icon",{
attrs:{
left:"",disabled:null===e.sound.remoteVolume}
,domProps:{
textContent:e._s(e.volumeIcon(e.sound.remoteVolume))}
}
)],1),a("v-col",{
staticClass:"text-truncate text--secondary hidden-xs-only",staticStyle:{
"flex-basis":"115px"}
,attrs:{
cols:"auto"}
}
,[e._v(" "+e._s(e.$t("volume.remote"))+" ")]),a("v-col",[e.enableRemoteVolume?a(
"v-slider",{
attrs:{
dense:"","hide-details":"","thumb-label":e.$vuetify.breakpoint.smAndUp}
,model:{
value:e.remoteVolume,callback:function(t){
e.remoteVolume=t}
,expression:"remoteVolume"}
}
):a("v-slider",{
attrs:{
dense:"","hide-details":"",disabled:""}
}
)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.setVolumeModal=!1}
}
}
,[e._v("OK")])],1)],1):e._e()],1)}
,wn=[],Sn=n["a"].extend({
name:"SetVolumeModal",computed:Object(Re["a"])(Object(Re["a"])({
}
,Object(l["b"])({
sound:"setVolumeSound"}
)),{
}
,{
setVolumeModal:{
get:function(){
return this.$store.getters.setVolumeModal}
,set:function(e){
this.$store.commit("setSetVolumeModal",e)}
}
,enableLocalVolume:{
get:function(){
return null!==this.sound.localVolume}
,set:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e?t.$store.getters.settings.localVolume:null,t.$store.commit("se
tSoundLocalVolume",{
sound:t.sound,volume:n}
),a.next=4,window.setCustomLocalVolume(t.sound.id,n);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
}
,localVolume:{
get:function(){
return this.sound.localVolume}
,set:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return t.$store.commit("setSoundLocalVolume",{
sound:t.sound,volume:e}
),a.next=3,window.setCustomLocalVolume(t.sound.id,e);
case 3:case"end":return a.stop()}
}
),a)}
)))()}
}
,enableRemoteVolume:{
get:function(){
return null!==this.sound.remoteVolume}
,set:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
var n;
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return n=e?t.$store.getters.settings.remoteVolume:null,t.$store.commit("s
etSoundRemoteVolume",{
sound:t.sound,volume:n}
),a.next=4,window.setCustomLocalVolume(t.sound.id,n);
case 4:case"end":return a.stop()}
}
),a)}
)))()}
}
,remoteVolume:{
get:function(){
return this.sound.remoteVolume}
,set:function(e){
var t=this;
return Object(s["a"])(regeneratorRuntime.mark((function a(){
return regeneratorRuntime.wrap((function(a){
while(1)switch(a.prev=a.next){
case 0:return t.$store.commit("setSoundRemoteVolume",{
sound:t.sound,volume:e}
),a.next=3,window.setCustomRemoteVolume(t.sound.id,e);
case 3:case"end":return a.stop()}
}
),a)}
)))()}
}
}
),methods:{
volumeIcon:M}
}
),xn=Sn,Tn=Object(j["a"])(xn,yn,wn,!1,null,null,null),Vn=Tn.exports;
z()(Tn,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VCardTitle:xt["
c"],VCheckbox:ba["a"],VCol:ie["a"],VDialog:aa["a"],VIcon:F["a"],VRow:E["a"],VSli
der:se["a"],VSpacer:na["a"]}
);
var An=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
persistent:"","max-width":"600px"}
,model:{
value:e.isNullAudioBackendLoaded,callback:function(t){
e.isNullAudioBackendLoaded=t}
,expression:"isNullAudioBackendLoaded"}
}
,[a("v-card",[a("v-toolbar",{
attrs:{
color:"red lighten-1",dark:""}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-music-off")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("noAudioBackend.title")))])],1),a("v-card-text",{
staticClass:"pt-3"}
,[e._v(" "+e._s(e.$t("noAudioBackend.notDetected"))+" "),a("br"),e._v(e._s(e.$t(
"noAudioBackend.choose"))+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:e.selectPipeWire}
}
,[e._v("PipeWire")]),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:e.selectPulseAudio}
}
,[e._v("PulseAudio")])],1)],1)],1)}
,Dn=[],_n=n["a"].extend({
name:"NoAudioBackendModal",computed:{
isNullAudioBackendLoaded:function(){
return 0===this.$store.getters.settings.audioBackend}
}
,methods:{
selectPipeWire:function(){
this.$store.commit("setAudioBackend",g.PipeWire),this.$store.dispatch("saveSetti
ngs")}
,selectPulseAudio:function(){
this.$store.commit("setAudioBackend",g.PulseAudio),this.$store.dispatch("saveSet
tings")}
}
}
),Cn=_n,Mn=Object(j["a"])(Cn,An,Dn,!1,null,null,null),On=Mn.exports;
z()(Mn,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VDialog:aa["a"]
,VIcon:F["a"],VSpacer:na["a"],VToolbar:G["a"]}
);
var Pn=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("div",[a("v-dialog",{
attrs:{
persistent:"","max-width":"600px"}
,model:{
value:e.modal,callback:function(t){
e.modal=t}
,expression:"modal"}
}
,[a("v-card",[a("v-toolbar",{
attrs:{
color:"orange",dark:""}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-music-off")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("windows.badConfiguration")))])],1),a("v-card-text",{
staticClass:"pt-3"}
,[a("p",[e._v(" "+e._s(e.$t("windows.virtualAudioCableMisconfiguration"))),a("br
"),e._v(" "+e._s(e.$t("windows.selectMic"))+" ")]),a("v-select",{
attrs:{
items:e.recordingDevices,"return-object":"","item-text":"name"}
,model:{
value:e.selected,callback:function(t){
e.selected=t}
,expression:"selected"}
}
)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{
attrs:{
color:"primary"}
,on:{
click:e.setup}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-robot")]),e._v(" "+e._s(e.$t("windows.automaticSetup"))+" ")],1),a("
v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.modal=!1}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cancel")]),e._v(" "+e._s(e.$t("actions.ignore"))+" ")],1)],1)],1)],1
),a("v-snackbar",{
attrs:{
timeout:-1}
,scopedSlots:e._u([{
key:"action",fn:function(t){
var n=t.attrs;
return[a("v-btn",e._b({
attrs:{
color:"primary",text:""}
,on:{
click:function(t){
e.modal=!0,e.snackbar=!1}
}
}
,"v-btn",n,!1),[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-gesture-tap")]),e._v(" "+e._s(e.$t("windows.setUpNow"))+" ")],1),a("
v-btn",e._b({
attrs:{
color:"grey",text:""}
,on:{
click:function(t){
e.snackbar=!1}
}
}
,"v-btn",n,!1),[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cancel")]),e._v(" "+e._s(e.$t("actions.dismiss"))+" ")],1)]}
}
]),model:{
value:e.snackbar,callback:function(t){
e.snackbar=t}
,expression:"snackbar"}
}
,[e._v(" "+e._s(e.$t("windows.detectedMisconfiguration"))+" ")])],1)}
,jn=[],$n=n["a"].extend({
name:"WindowsSetupModal",data:function(){
return{
modal:!1,snackbar:!1,recordingDevices:[],selected:null}
}
,mounted:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,e.$store.dispatch("getVBCableState");
case 2:if(e.$store.getters.isVBCableProperlySetup){
t.next=8;
break}
return t.next=5,window.getRecordingDevices();
case 5:a=t.sent,a&&(e.recordingDevices=a[0],e.selected=a[1]),e.snackbar=!0;
case 8:case"end":return t.stop()}
}
),t)}
)))()}
,methods:{
setup:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
var a;
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return t.next=2,window.setupVBCable(e.selected?e.selected.guid:null);
case 2:a=t.sent,a&&(e.modal=!1);
case 4:case"end":return t.stop()}
}
),t)}
)))()}
}
}
),zn=$n,Nn=a("2db4"),Fn=Object(j["a"])(zn,Pn,jn,!1,null,null,null),In=Fn.exports
;
z()(Fn,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VDialog:aa["a"]
,VIcon:F["a"],VSelect:je["a"],VSnackbar:Nn["a"],VSpacer:na["a"],VToolbar:G["a"]}
);
var Rn=function(){
var e=this,t=e.$createElement,a=e._self._c||t;
return a("v-dialog",{
attrs:{
persistent:"","max-width":"600px"}
,model:{
value:e.administrativeModal,callback:function(t){
e.administrativeModal=t}
,expression:"administrativeModal"}
}
,[a("v-card",[a("v-toolbar",{
attrs:{
color:"orange",dark:""}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-shield-account-outline")]),a("span",{
staticClass:"text-h5"}
,[e._v(e._s(e.$t("windows.administrativePrivilegesNeeded")))])],1),a("v-card-tex
t",{
staticClass:"pt-3"}
,[e._v(" "+e._s(e.$t("windows.administrativePrivilegesNeeded"))+" ")]),a("v-card
-actions",[a("v-spacer"),a("v-btn",{
attrs:{
color:"primary"}
,on:{
click:e.setup}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-restart-alert")]),e._v(" "+e._s(e.$t("windows.restartAsAdmin"))+" ")
],1),a("v-btn",{
attrs:{
text:"",color:"primary"}
,on:{
click:function(t){
e.administrativeModal=!1}
}
}
,[a("v-icon",{
attrs:{
left:""}
}
,[e._v("mdi-cancel")]),e._v(" "+e._s(e.$t("actions.ignore"))+" ")],1)],1)],1)],1
)}
,Ln=[],Bn=n["a"].extend({
name:"WindowsAdministrativeModal",computed:{
administrativeModal:{
get:function(){
return this.$store.getters.administrativeModal}
,set:function(e){
this.$store.commit("setAdministrativeModal",e)}
}
}
,methods:{
setup:function(){
var e=this;
return Object(s["a"])(regeneratorRuntime.mark((function t(){
return regeneratorRuntime.wrap((function(t){
while(1)switch(t.prev=t.next){
case 0:return e.administrativeModal=!1,t.next=3,window.restartAsAdmin();
case 3:case"end":return t.stop()}
}
),t)}
)))()}
}
}
),Hn=Bn,Kn=Object(j["a"])(Hn,Rn,Ln,!1,null,null,null),En=Kn.exports;
z()(Kn,{
VBtn:N["a"],VCard:St["a"],VCardActions:xt["a"],VCardText:xt["b"],VDialog:aa["a"]
,VIcon:F["a"],VSpacer:na["a"],VToolbar:G["a"]}
);
var Gn=n["a"].extend({
components:{
WindowsSetupModal:In,WindowsAdministrativeModal:En,NoAudioBackendModal:On,SetVol
umeModal:Vn,DeleteSoundModal:bn,RemoveTabModal:mn,SearchModal:rn,SetHotkeyModal:
Xa,SideButtons:Wa,VolumeSliders:pa,NoTabsCard:Zt,SoundTabs:Gt,UpdateModal:ia,Out
putSelection:Ne,PlayingSoundsDrawer:De,AppPassthroughDrawer:q}
,mounted:function(){
S()}
}
),Un=Gn,Wn=(a("5c0b"),a("7496")),qn=a("8212"),Jn=a("a523"),Yn=a("f6c4"),Zn=Objec
t(j["a"])(Un,o,i,!1,null,null,null),Qn=Zn.exports;
z()(Zn,{
VApp:Wn["a"],VAvatar:qn["a"],VBtn:N["a"],VCol:ie["a"],VContainer:Jn["a"],VIcon:F
["a"],VMain:Yn["a"],VRow:E["a"],VSpacer:na["a"]}
);
a("d5e8"),a("5363");
var Xn=a("6c42"),eo=(a("da96"),a("d772")),to=a.n(eo),ao=a("d1d6"),no=a.n(ao);
n["a"].use(no.a),n["a"].use(Xn["a"],{
position:"bottom-right",timeout:3e3,closeOnClick:!1,transition:"Vue-Toastificati
on__fade",maxToasts:3,newestOnTop:!0}
),ae.a.extend(to.a),n["a"].config.productionTip=!1,new n["a"]({
store:b,vuetify:c,i18n:k,render:function(e){
return e(Qn)}
}
).$mount("#app")}
,d873:function(e,t,a){
}
,dc93:function(e,t,a){
"use strict";
a("0743")}
,e120:function(e,t,a){
"use strict";
a("9736")}
,e597:function(e,t,a){
"use strict";
a("049a")}
,edd4:function(e){
e.exports=JSON.parse('{
"welcome":{
"title":"Welcome to {
programName}
","noTabs":"There are currently no tabs. Add one by clicking {
addTab}
 on the right side","linuxDetected":"We have detected that you are on Linux.","l
inuxGuide1":"To play sounds you just have to select the output application in th
e top right.","linuxGuide2":"You don\'t have to change your input or output devi
ce anywhere.","windowsDetected":"We have detected that you are on Windows.","win
dowsGuide1":"Make sure to follow the installation steps {
seenOnWebsite}
","windowsGuide2":"as seen on our website"}
,"outputApp":"Output application","outputDevice":"Output device","actions":{
"refresh":"Refresh","stop":"Stop","search":"Search","addTab":"Add Tab","reloadSo
unds":"Reload","play":"Play","appPassThrough":"Pass through","playlistMode":"Pla
ylist mode","yes":"Yes","no":"No","on":"On","off":"Off","shuffle":"Shuffle","con
firmation":"Confirmation","openFolder":"Open folder","ignore":"Ignore","dismiss"
:"Dismiss"}
,"removeTab":{
"question":"Would you like to remove the tab {
tabName}
?"}
,"deleteSound":{
"delete":"Delete","question":"Would you like to delete the sound {
soundName}
?"}
,"empty":{
"nothingToShow":"Nothing to show","noSounds":"No compatible sounds found in the 
folder {
path}
. Supported file formats are mp3, wav, flac","noFavorites":"You currently have n
o favorites. Favor some sounds to display them here"}
,"favorites":{
"title":"Favorites","favorite":"Favorite"}
,"settings":{
"title":"Settings","tabHotkeysOnly":"Hotkeys only for current tab","viewMode":{
"title":"View mode","listView":"List view","gridView":"Grid view","launchpadMode
":"Emulated Launchpad"}
,"allowOverlapping":"Allow sound overlapping","deleteToTrash":"Delete to trash",
"minimizeToTray":"Minimize to system tray","useAsDefaultDevice":"Use as default 
device","muteDuringPlayback":"Mute microphone during playback","theme":{
"title":"Theme","system":"System","dark":"Dark","light":"Light"}
,"audioBackend":"Audio backend","allowMultipleOutputs":"Allow multiple output ap
ps","stopHotkey":"Stop hotkey","pushToTalkKeys":"Push-to-talk keys","language":"
Language override"}
,"tray":{
"show":"Show window","hide":"Hide window","exit":"Exit"}
,"customVolume":{
"context":"Set custom volume","setFor":"Set volume for {
soundName}
"}
,"noAudioBackend":{
"title":"No audio backend found","notDetected":"We could not detect a supported 
audio backend for your system.","choose":"Please choose one below"}
,"hotkeys":{
"title":"Set hotkey","hotkey":"Hotkey","setFor":"Set hotkey for {
soundName}
"}
,"input":{
"ctrl":"CTRL","shift":"Shift","enter":"Enter","leftClick":"Left click","rightCli
ck":"Right click","arrowKeys":"Arrow keys","space":"Space"}
,"help":{
"title":"Help","search":{
"text":"Press {
ctrl}
 + {
f}
 to {
search}
","search":"search"}
,"play":{
"text":"{
leftClick}
 to {
play}
","play":"play"}
,"options":{
"text":"{
rightClick}
 to {
moreOptions}
","moreOptions":"show more options"}
,"togglePlayback":{
"text":"Press {
space}
 to {
playPause}
","playPause":"pause/resume the currently playing sounds"}
,"appPassThrough":{
"text":"Press {
ctrl}
 + {
g}
 to {
show}
","show":"show app pass through"}
,"reloadSounds":{
"text":"Press {
ctrl}
 + {
r}
 to {
reload}
","reload":"reload the current tab"}
,"supportUs":"Support us","visitOurWebsite":"Visit our website","joinOurDiscord"
:"Join our Discord","viewSourceCode":"View the source code"}
,"volume":{
"local":"Local volume","remote":"Remote volume","sync":"Sync volumes"}
,"appPassThrough":{
"title":"App pass through","noAppsFound":"No apps found","noOutputSelected":"You
 must have selected an output application"}
,"search":{
"typeToSearch":"Type to search","noResultsFound":"No results found","changeSelec
tion":"{
arrowKeys}
 to change selection","jumpToSelected":"{
enter}
 to jump to the currently selected sound","playSelected":"{
shift}
 + {
enter}
 to play the currently selected sound"}
,"sort":{
"title":"Sort","modifiedAscending":"Modified ascending","modifiedDescending":"Mo
dified descending","alphabeticalAscending":"Alphabetical ascending","alphabetica
lDescending":"Alphabetical descending"}
,"downloader":{
"title":"Downloader","notAvailable":"{
youtube-dl}
 and/or {
ffmpeg}
 are not installed","installNow":"Install now","placeholder":"Enter a link","pro
gress":"Progress","converting":"Converting","eta":"ETA","cancelDownload":"Cancel
 Download","startDownload":"Start download","success":"Successfully downloaded: 
{
title}
","close":"Close"}
,"update":{
"title":"An update is available!","yourVersion":"Your version","latestVersion":"
Latest version","updateNow":"Update now","ignore":"Ignore"}
,"systemInfo":{
"title":"System information","description":"Attach this information when creatin
g a bug report","copyToClipboard":"Copy to clipboard"}
,"windows":{
"detectedMisconfiguration":"Detected a misconfiguration with VB-Cable","setUpNow
":"Set-up now","badConfiguration":"Bad configuration detected","virtualAudioCabl
eMisconfiguration":"We have detected that your Virtual Audio Cable is not proper
ly set-up.","selectMic":"Please select your microphone and proceed","automaticSe
tup":"Automatically set-up","administrativePrivilegesNeeded":"Administrative pri
vileges needed!","restartAsAdmin":"Restart as admin"}
,"errors":{
"0":"Failed to play","1":"Failed to seek","2":"Failed to pause","3":"Failed to r
epeat","4":"Failed to resume","5":"Failed to move to sink","6":"Sound not found"
,"7":"Folder does not exist","8":"Tab does not exist","9":"Failed to set hotkey"
,"10":"Failed to start passthrough","11":"Failed to move back","12":"Failed to m
ove back passthrough","13":"Failed to revert default source","14":"Failed to set
 default source","15":"youtube-dl not found","16":"Invalid URL","17":"Failed to 
parse youtube-dl JSON","18":"Unknown youtube-dl failure","19":"Failed to delete 
the file","20":"Failed to mute","21":"Failed to set custom volume","error":"Erro
r","backendFunctionMissing":"Backend function missing: {
functionName}
"}
}
')}
,f184:function(e){
e.exports=JSON.parse('{
"errors":{
"0":"Αποτυχία αναπαραγωγής","1":"Αποτυχία εύρεσ
ης","2":"Αποτυχία παύσης","3":"Αποτυχία επανάληψ
ης","4":"Αποτυχία συνέχισης","5":"Αποτυχία μεταφ
οράς σε sink","6":"Ο ήχος δεν βρέθηκε","7":"Ο φάκελο
ς δεν βρέθηκε","8":"Η καρτέλα δεν υπάρχει","9":"Α�
�οτυχία ορισμού πλήκτρου πρόσβασης","10":"Αποτ
υχία εκκίνησης διαβίβασης","11":"Αποτυχία επα�
�αφοράς","12":"Αποτυχία επαναφοράς διαβίβασης"
,"13":"Αποτυχία επαναφοράς προεπιλεγμένης πηγ
ής","14":"Αποτυχία ορισμού προεπιλεγμένης πηγ�
�ς","15":"Το youtube-dl δεν βρέθηκε","16":"Εσφαλμένη URL",
"17":"Αποτυχία ανάλυσης του JSON του youtube-dl","18":"Ά�
�νωστο σφάλμα του youtube-dl","19":"Αποτυχία διαγρα�
�ής αρχείου","20":"Αποτυχία σίγασης","21":"Αποτυχ�
�α ορισμού προσαρμοσμένης έντασης","error":"Σφά�
�μα","backendFunctionMissing":"Ελλιπής λειτουργία μονάδ�
�ς στήριξης: {
functionName}
"}
,"actions":{
"addTab":"Προσθήκη καρτέλας","reloadSounds":"Ανανέωση","
play":"Αναπαραγωγή","stop":"Διακοπή","search":"Αναζήτη�
�η","refresh":"Ανανέωση","appPassThrough":"Διαβίβαση","openFol
der":"Άνοιγμα φακέλου","confirmation":"Επιβεβαίωση","sh
uffle":"Ανάμιξη","off":"Ανενεργό","on":"Ενεργό","no":"Όχ�
�","yes":"Ναι","playlistMode":"Λειτουργία λίστας","dismiss":"
Παράβλεψη","ignore":"Αγνόηση"}
,"settings":{
"stopHotkey":"Πλήκτρο διακοπής","title":"Ρυθμίσεις","pus
hToTalkKeys":"Πλήκτρα Push-to-talk","allowMultipleOutputs":"Να επιτ
ρέπονται πολλαπλές εφαρμογές εξόδου","audioBacke
nd":"Μονάδα στήριξης ήχου","theme":{
"light":"Φωτεινό","dark":"Σκοτεινό","system":"Σύστημα","ti
tle":"Θέμα"}
,"muteDuringPlayback":"Σίγαση μικροφώνου κατά την ανα�
�αραγωγή","useAsDefaultDevice":"Χρήση ως προεπιλεγμέν�
�ς συσκευής","minimizeToTray":"Ελαχιστοποίηση στο πλ
αίσιο συστήματος","deleteToTrash":"Διαγραφή στα απο
ρρίμματα","allowOverlapping":"Να επιτρέπεται η επικά�
�υψη του ήχου","viewMode":{
"launchpadMode":"Προσομοιωμένο Launchpad","gridView":"Προβολ�
� σε πλέγμα","listView":"Προβολή σε λίστα","title":"Λει
τουργία προβολής"}
,"tabHotkeysOnly":"Πλήκτρα πρόσβασης μόνο για τωριν�
� καρτέλα","language":"Παράκαμψη γλώσσας"}
,"help":{
"search":{
"search":"αναζήτηση","text":"Πατήστε {
ctrl}
 + {
f}
 για {
search}
"}
,"title":"Βοήθεια","play":{
"play":"αναπαραγωγή","text":"{
leftClick}
 για {
play}
"}
,"appPassThrough":{
"text":"Πατήστε {
ctrl}
 + {
g}
 για {
show}
","show":"εμφάνιση διαβίβασης εφαρμογών"}
,"joinOurDiscord":"Μπείτε στο Discord μας","options":{
"text":"{
rightClick}
 για {
moreOptions}
","moreOptions":"προβολή περισσότερων επιλογών"}
,"reloadSounds":{
"reload":"ανανέωση της τρέχουσας καρτέλας","text":"�
�ατήστε {
ctrl}
 + {
r}
 για {
reload}
"}
,"viewSourceCode":"Προβολή του πηγαίου κώδικα","visitOurW
ebsite":"Επισκεφθείτε τον ιστότοπο μας","supportUs":"�
�ποστηρίξτε μας","togglePlayback":{
"playPause":"παύση/συνέχιση των ήχων που παίζοντα
ι αυτήν τη στιγμή","text":"Πατήστε {
space}
 για {
playPause}
"}
}
,"hotkeys":{
"title":"Ορισμός πλήκτρου πρόσβασης","hotkey":"Πλήκ�
�ρο πρόσβασης","setFor":"Ορισμός πλήκτρου πρόσβα
σης για {
soundName}
"}
,"volume":{
"local":"Τοπική ένταση","remote":"Απομακρυσμένη έντ�
�ση","sync":"Συγχρονισμός εντάσεων"}
,"welcome":{
"title":"Καλώς ορίσατε στο {
programName}
","noTabs":"Δεν υπάρχουν καρτέλες. Προσθέστε μία 
πατώντας {
addTab}
 στα δεξιά","windowsGuide2":"που βρίσκονται στον ιστ
ότοπο μας","windowsGuide1":"Φροντίστε να ακολουθήσε
τε τις οδηγίες εγκατάστασης {
seenOnWebsite}
","windowsDetected":"Εντοπίσαμε πως χρησιμοποιείτε Wi
ndows.","linuxGuide2":"Δεν χρειάζεται να αλλάξετε την 
συσκευή εισόδου ή εξόδου σας.","linuxGuide1":"Για ν�
� αναπαράγετε ήχους θα πρέπει να επιλέξετε τ
ην εφαρμογή εξόδου πάνω δεξιά.","linuxDetected":"Εντ
οπίσαμε πως χρησιμοποιείτε Linux."}
,"downloader":{
"eta":"ETA","placeholder":"Εισάγετε σύνδεσμο","notAvailable":"Τ
ο {
youtube-dl}
 και/ή το {
ffmpeg}
 δεν είναι εγκατεστημένα","title":"Λήπτης","success":
"Επιτυχής λήψη: {
title}
","progress":"Πρόοδος","startDownload":"Εκκίνηση λήψης","can
celDownload":"Ακύρωση λήψης","installNow":"Εγκατάσταση τ
ώρα","converting":"Μετατροπή","close":"Κλείσιμο"}
,"appPassThrough":{
"title":"Διαβίβαση εφαρμογών","noOutputSelected":"Πρέπει
 να επιλέξετε μια εφαρμογή εξόδου","noAppsFound":"Δ
εν βρέθηκαν εφαρμογές"}
,"sort":{
"alphabeticalDescending":"Αλφαβητική φθίνουσα","alphabeticalAs
cending":"Αλφαβητική αύξουσα","modifiedDescending":"Τροπο�
�οιήθηκε φθίνουσα","modifiedAscending":"Τροποποιήθηκ�
� αύξουσα","title":"Ταξινόμηση"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 για αναπαραγωγή του τρέχοντα επιλεγμένου ή
χου","jumpToSelected":"{
enter}
 για μετάβαση στον τρέχοντα επιλεγμένο ήχο",
"changeSelection":"{
arrowKeys}
 για εναλλαγή επιλογής","noResultsFound":"Δεν βρέθηκ
αν αποτελέσματα","typeToSearch":"Πληκτρολογήστε γι
α αναζήτηση"}
,"input":{
"arrowKeys":"Πλήκτρα βέλους","shift":"Shift","ctrl":"CTRL","rightCl
ick":"Δεξί κλικ","leftClick":"Αριστερό κλικ","enter":"Enter"
,"space":"Space"}
,"update":{
"title":"Μία ενημέρωση είναι διαθέσιμη!","ignore":"Α�
�νόηση","updateNow":"Ενημέρωση τώρα","latestVersion":"Τελε
υταία έκδοση","yourVersion":"Τωρινή έκδοση"}
,"systemInfo":{
"copyToClipboard":"Αντιγραφή σε πρόχειρο","description":"Επ
ισυνάψτε αυτές τις πληροφορίες όταν στέλνε�
�ε αναφορά προβλήματος","title":"Πληροφορίες συ�
�τήματος"}
,"noAudioBackend":{
"choose":"Παρακαλώ επιλέξτε ένα παρακάτω","notDetecte
d":"Δεν μπορέσαμε να βρούμε υποστηριζόμενη μ�
�νάδα στήριξης ήχου στο σύστημα σας.","title":"Δε
ν βρέθηκε μονάδα στήριξης ήχου"}
,"tray":{
"exit":"Έξοδος","hide":"Απόκρυψη παραθύρου","show":"Εμ�
�άνιση παραθύρου"}
,"favorites":{
"favorite":"Αγαπημένο","title":"Αγαπημένα"}
,"empty":{
"noFavorites":"Προς το παρόν δεν έχετε αγαπημένα. Π
ροτιμήστε μερικούς ήχους για να τους εμφανί
σετε εδώ","noSounds":"Δεν βρέθηκαν συμβατοί ήχοι �
�τον φάκελο {
path}
. Υποστηριζόμενα μέσα είναι mp3, wav, flac","nothingToSho
w":"Τίποτα για εμφάνιση"}
,"deleteSound":{
"question":"Θέλετε να διαγράψετε τον ήχο {
soundName}
;
","delete":"Διαγραφή"}
,"removeTab":{
"question":"Θέλετε να αφαιρέσετε την καρτέλα {
tabName}
;
"}
,"outputDevice":"Συσκευή εξόδου","outputApp":"Εφαρμογή εξ
όδου","windows":{
"setUpNow":"Ρύθμιση τώρα","restartAsAdmin":"Επανεκκίνηση 
ως διαχειριστής","administrativePrivilegesNeeded":"Απαιτού�
�ται διαχειριστικά προνόμια!","automaticSetup":"Αυτό
ματη ρύθμιση","selectMic":"Παρακαλώ επιλέξετε το �
�ικρόφωνο σας και συνεχίστε","virtualAudioCableMisconfigu
ration":"Διαπιστώσαμε ότι το εικονικό καλώδιο ή
χου δεν έχει ρυθμιστεί σωστά.","badConfiguration":"Εν�
�οπίστηκε κακή διαμόρφωση","detectedMisconfiguration":"Ε�
�τοπίστηκε εσφαλμένη διαμόρφωση του VB-Cable"}
,"customVolume":{
"setFor":"Ορισμός έντασης για {
soundName}
","context":"Ορισμός προσαρμοσμένης έντασης"}
}
')}
,f693:function(e){
e.exports=JSON.parse('{
"errors":{
"0":"Échec de la lecture","1":"Recherche échoué","2":"Échec de la pause","3"
:"Échec de la répétition","4":"Échec de la reprise","5":"Impossible de faire
 passer par le bloc récepteur audio","6":"Son introuvable","7":"Le dossier n\'e
xiste pas","8":"L\'onglet n\'existe pas","9":"Échec de la définition du raccou
rci","10":"Échec de démarrage du passthrough","11":"N\'a pas réussi à reveni
r en arrière","12":"N’a pas réussi à réinitialiser le passthrough","13":"�
�chec du retour à la source par défaut","14":"Échec de définition de la sour
ce par défaut","15":"youtube-dl est introuvable","16":"URL invalide","17":"Éch
ec de l\'analyse du JSON de youtube-dl","18":"Erreur inconnue de youtube-dl","19
":"Échec de la suppression du fichier","20":"Échec de la mise en sourdine","21
":"Échec de la personnalisation du volume","error":"Erreur","backendFunctionMis
sing":"Fonction de gestion manquante : {
functionName}
"}
,"systemInfo":{
"copyToClipboard":"Copier dans le presse-papiers","description":"Joindre ces inf
ormations lors de la création d\'un rapport d\'erreur","title":"Informations sy
stème"}
,"update":{
"ignore":"Ignorer","updateNow":"Mettre à jour maintenant","latestVersion":"Dern
ière version","yourVersion":"Votre version","title":"Une mise à jour est dispo
nible !"}
,"downloader":{
"close":"Fermer","success":"Téléchargement réussi : {
title}
","startDownload":"Démarrer le téléchargement","cancelDownload":"Annuler le t
éléchargement","converting":"Conversion","progress":"Progression","placeholder
":"Entrez un lien","installNow":"Installer maintenant","notAvailable":"{
youtube-dl}
 et/ou {
ffmpeg}
 ne sont pas installés","title":"Téléchargements","eta":"Temps estimée"}
,"sort":{
"alphabeticalDescending":"Ordre alphabétique inverse","alphabeticalAscending":"
Ordre alphabétique","title":"Trier","modifiedDescending":"Descendant modifié",
"modifiedAscending":"Ascendant modifié"}
,"search":{
"playSelected":"{
shift}
 + {
enter}
 pour lire le son actuellement sélectionné","jumpToSelected":"{
enter}
 pour passer au son actuellement sélectionné","changeSelection":"{
arrowKeys}
 pour modifier la sélection","noResultsFound":"Aucun résultat trouvé","typeTo
Search":"Tapez pour rechercher"}
,"appPassThrough":{
"noOutputSelected":"Vous devez sélectionner une application de diffusion","noAp
psFound":"Aucune application trouvée","title":"App pass through"}
,"volume":{
"sync":"Synchroniser le volume","remote":"Volume distant","local":"Volume local"
}
,"help":{
"viewSourceCode":"Voir le code source","joinOurDiscord":"Rejoindre notre Discord
","visitOurWebsite":"Visiter notre site Web","supportUs":"Nous soutenir","reload
Sounds":{
"reload":"actualiser l\'onglet courant","text":"Appuyez sur {
ctrl}
 + {
r}
 pour {
reload}
"}
,"appPassThrough":{
"text":"Appuyez sur {
ctrl}
 + {
g}
 pour {
show}
","show":"montrer la transmission"}
,"options":{
"moreOptions":"afficher plus d\'options","text":"{
rightClick}
 pour {
moreOptions}
"}
,"play":{
"play":"lire","text":"{
leftClick}
 pour {
play}
"}
,"search":{
"search":"rechercher","text":"Appuyez sur {
ctrl}
 + {
f}
 pour {
search}
"}
,"title":"Aide","togglePlayback":{
"playPause":"mettre en pause/reprendre la lecture des sons","text":"Appuyez sur 
{
space}
 pour {
playPause}
"}
}
,"input":{
"arrowKeys":"Flèches","rightClick":"Clic droit","leftClick":"Clic gauche","ente
r":"Entrée","shift":"Maj","ctrl":"CTRL","space":"Espace"}
,"hotkeys":{
"setFor":"Définir le raccourci pour {
soundName}
","hotkey":"Raccourci","title":"Définir le raccourci"}
,"noAudioBackend":{
"choose":"Veuillez en sélectionner un ci-dessous","notDetected":"Nous n\'avons 
détecté aucun gestionnaire de son pris en charge pour votre système.","title"
:"Aucun gestionnaire de son trouvé"}
,"settings":{
"audioBackend":"Gestionnaire de son","pushToTalkKeys":"Touches Appuyer-pour-parl
er","stopHotkey":"Raccourcis d\'arrêt","allowMultipleOutputs":"Autoriser plusie
urs applications de diffusion","theme":{
"light":"Clair","dark":"Sombre","system":"Système","title":"Thème"}
,"muteDuringPlayback":"Rendre le micro muet pendant la lecture","useAsDefaultDev
ice":"Utiliser comme périphérique par défaut","minimizeToTray":"Réduire dans
 la barre d\'état du système","deleteToTrash":"Supprimer dans la corbeille","a
llowOverlapping":"Autoriser le chevauchement des sons","viewMode":{
"launchpadMode":"Launchpad émulé","gridView":"Vue en grille","listView":"Vue e
n liste","title":"Affichage"}
,"tabHotkeysOnly":"Raccourcis claviers pour l\'onglet séléctionné uniquement"
,"title":"Paramètres","language":"Écraser la langue"}
,"tray":{
"exit":"Quitter","hide":"Masquer la fenêtre","show":"Afficher la fenêtre"}
,"favorites":{
"favorite":"Favori","title":"Favoris"}
,"empty":{
"noFavorites":"Vous n\'avez aucun favori pour le moment. Marquez des sons comme 
favoris pour les retrouver ici","noSounds":"Aucun son compatible trouvé dans le
 dossier {
path}
. Les formats de fichier supportés sont mp3, wav, flac","nothingToShow":"Rien �
� afficher"}
,"deleteSound":{
"question":"Souhaitez-vous supprimer le son {
soundName}
 ?","delete":"Supprimer"}
,"removeTab":{
"question":"Souhaitez-vous supprimer l\'onglet {
tabName}
 ?"}
,"actions":{
"openFolder":"Ouvrir le dossier","confirmation":"Confirmation","shuffle":"Aléat
oire","off":"Arrêt","on":"Marche","no":"Non","yes":"Oui","playlistMode":"Mode l
iste de lecture","play":"Lire","reloadSounds":"Recharger","addTab":"Ajouter un o
nglet","search":"Rechercher","stop":"Arrêter","refresh":"Actualiser","appPassTh
rough":"Pass Through","ignore":"Ignorer","dismiss":"Rejeter"}
,"outputDevice":"Périphérique de sortie","outputApp":"Application de diffusion
","welcome":{
"windowsGuide2":"comme indiqué sur notre site","windowsGuide1":"Assurez-vous de
 suivre les étapes d\'installation {
seenOnWebsite}
","windowsDetected":"Nous avons détecté que vous êtes sur Windows.","linuxGui
de2":"Vous n\'avez pas besoin de changer votre périphérique d\'entrée ou de s
ortie.","linuxGuide1":"Pour jouer des sons, il vous suffit de sélectionner l\'a
pplication de diffusion en haut à droite.","linuxDetected":"Nous avons détect�
� que vous êtes sur Linux.","noTabs":"Il n\'y a aucun onglet pour le moment. Aj
outez-en un en cliquant sur {
addTab}
 sur la droite","title":"Bienvenue dans {
programName}
"}
,"windows":{
"badConfiguration":"Mauvaise configuration détectée","detectedMisconfiguration
":"Mauvaise configuration de VB-Cable détectée","restartAsAdmin":"Redémarrer 
en tant qu\'administrateur","administrativePrivilegesNeeded":"Privilèges d\'adm
inistrateurs requis !","automaticSetup":"Configuration automatique","selectMic
":"Veuillez sélectionner votre microphone et continuer","virtualAudioCableMisco
nfiguration":"Nous avons détecté que votre Virtual Audio Cable n’est pas cor
rectement configuré.","setUpNow":"Configurer maintenant"}
,"customVolume":{
"setFor":"Régler le volume de {
soundName}
","context":"Définir le volume personnalisé"}
}
')}
,f830:function(e,t,a){
}
,ffeb:function(e){
e.exports=JSON.parse('{
"welcome":{
"title":"{
programName}
\'a Hoş Geldiniz","noTabs":"Şu anda sekme yok. Sağ taraftaki {
addTab}
 öğesini tıklayarak bir tane ekleyin","linuxDetected":"Linux\'ta olduğunuzu 
tespit ettik.","linuxGuide1":"Sesleri çalmak için sağ üstteki çıktı uygul
amasını seçmeniz yeterlidir.","linuxGuide2":"Giriş veya çıkış cihazını
zı hiçbir yerde değiştirmeniz gerekmez.","windowsDetected":"Windows\'ta oldu
ğunuzu tespit ettik.","windowsGuide1":"{
seenOnWebsite}
 kurulum adımlarını uyguladığınızdan emin olun","windowsGuide2":"web site
mizde görüldüğü gibi"}
,"outputApp":"Çıkış uygulaması","outputDevice":"Çıkış aygıtı","action
s":{
"refresh":"Yenile","stop":"Durdur","search":"Ara","addTab":"Sekme ekle","reloadS
ounds":"Tekrar yükle","play":"Oynat","appPassThrough":"Geç","playlistMode":"Oy
natma Lis","yes":"Evet","no":"Hayır","on":"Açık","off":"Kapalı","shuffle":"K
arıştır","confirmation":"Onayla","openFolder":"Klasör aç","dismiss":"Reddet
","ignore":"Yoksay"}
,"removeTab":{
"question":"{
tabName}
 sekmesini kaldırmak istiyor musunuz?"}
,"deleteSound":{
"delete":"Sil","question":"{
soundName}
 sesini silmek istiyor musunuz?"}
,"empty":{
"nothingToShow":"Hiçbir şey bulunamadı","noSounds":"{
path}
 klasöründe uyumlu ses bulunamadı. Desteklenen dosya formatları mp3, wav, fl
ac\'tır","noFavorites":"Şu anda hiç favoriniz yok. Burada görüntülemek iç
in birkaç sesi favorilere ekleyin"}
,"favorites":{
"title":"Favoriler","favorite":"Favori"}
,"settings":{
"title":"Ayarlar","tabHotkeysOnly":"Yalnızca geçerli sekme için kısayol tuş
ları","viewMode":{
"title":"Ekran modu","listView":"Liste görünümü","gridView":"Izgara görün�
�mü","launchpadMode":"Öykünülmüş Başlatma Çubuğu"}
,"allowOverlapping":"Ses örtüşmesine izin ver","deleteToTrash":"Çöp kutusun
a taşı","minimizeToTray":"Sistem tepsisine küçültün","useAsDefaultDevice":
"Standart cihaz olarak kullanın","muteDuringPlayback":"Oynatma sırasında mikr
ofonun sesini kapatın","theme":{
"title":"Tema","system":"Sistem","dark":"Karanlık","light":"Aydınlık"}
,"audioBackend":"Ses arka ucu","stopHotkey":"Durdurma kısayol tuşu","pushToTal
kKeys":"Bas-konuş tuşları","allowMultipleOutputs":"Birden çok çıkış uygu
lamasına izin ver","language":"Dili geçersiz kılma"}
,"tray":{
"show":"Pencereyi göster","hide":"Pencereyi gizle","exit":"Çık"}
,"noAudioBackend":{
"title":"Ses arka ucu bulunamadı","notDetected":"Sisteminiz için desteklenen b
ir ses arka ucu tespit edemedik.","choose":"Lütfen aşağıdan birini seçin"}
,"hotkeys":{
"title":"Kısayol tuşu ayarla","hotkey":"Kısayol tuşu","setFor":"{
soundName}
 için kısayol tuşu ayarlayın"}
,"input":{
"ctrl":"CTRL","shift":"Shift","enter":"Enter","leftClick":"Sol tık","rightClick
":"Sağ tık","arrowKeys":"Ok tuşları","space":"Boşluk"}
,"help":{
"title":"Yardım","search":{
"text":"{
search}
 için {
ctrl}
 + {
f}
 basın","search":"ara"}
,"play":{
"text":"{
play}
 için {
leftClick}
","play":"oynat"}
,"options":{
"text":"{
moreOptions}
 için {
rightClick}
","moreOptions":"daha fazla seçenek göster"}
,"appPassThrough":{
"text":"{
show}
 için {
ctrl}
 + {
g}
 basın","show":"uygulama geçişini göster"}
,"reloadSounds":{
"text":"{
reload}
 için {
ctrl}
 + {
r}
 basın","reload":"mevcut sekmeyi yeniden yükle"}
,"supportUs":"Bizi destekleyin","visitOurWebsite":"İnternet sitemizi ziyaret ed
in","joinOurDiscord":"Discord\'umuza katılın","viewSourceCode":"Kaynak koda ba
kın","togglePlayback":{
"playPause":"çalmakta olan sesleri duraklat/devam ettir","text":"{
playPause}
 için {
space}
 tuşuna basın"}
}
,"volume":{
"local":"Yerel ses","remote":"Uzak ses","sync":"Ses düzeylerini eşitle"}
,"appPassThrough":{
"title":"Uygulama geçişi","noAppsFound":"Uygulama bulunamadı","noOutputSelect
ed":"Bir çıkış uygulaması seçmiş olmalısınız"}
,"search":{
"typeToSearch":"Aramak için yazın","noResultsFound":"Sonuç bulunamadı","chan
geSelection":"Seçimi değiştirmek için {
arrowKeys}
","jumpToSelected":"Seçili sese atlamak için {
enter}
","playSelected":"Şu anda seçili sesi çalmak için {
shift}
 + {
enter}
"}
,"sort":{
"title":"Sırala","modifiedAscending":"Tarihe göre artan","modifiedDescending":
"Tarihe göre azalan","alphabeticalAscending":"Alfabetik artan","alphabeticalDes
cending":"Alfabetik azalan"}
,"downloader":{
"title":"İndirici","notAvailable":"{
youtube-dl}
 ve/veya {
ffmpeg}
 kurulu değil","installNow":"Şimdi kur","placeholder":"Bir bağlantı girin","
progress":"İlerleme","converting":"Dönüştürülüyor","eta":"Kalan süre","c
ancelDownload":"İndirmeyi iptal et","startDownload":"İndirmeyi başlat","succe
ss":"İndirme tamamlandı: {
title}
","close":"Kapat"}
,"update":{
"title":"Bir güncelleme var!","yourVersion":"Kullanılan sürüm","latestVersio
n":"En son sürüm","updateNow":"Şimdi güncelle","ignore":"Yoksay"}
,"systemInfo":{
"title":"Sistem bilgileri","description":"Bir hata bildirirken bu bilgileri ekle
yin","copyToClipboard":"Panoya kopyala"}
,"errors":{
"0":"Oynatılamadı","1":"Aranamadı","2":"Duraklatılamadı","3":"Tekrarlanamad
ı","4":"Devam edilemedi","5":"Lavaboya taşınamadı","6":"Ses bulunamadı","7"
:"Klasör mevcut değil","8":"Sekme mevcut değil","9":"Kısayol tuşu ayarlanam
adı","10":"Doğrudan geçiş başlatılamadı","11":"Geri taşınamadı","12":"
Geçişe geri taşınamadı","13":"Varsayılan kaynak geri döndürülemedi","14
":"Varsayılan kaynak ayarlanamadı","15":"youtube-dl bulunamadı","16":"Geçers
iz URL","17":"Youtube-dl JSON dosyası işlenirken hata oluştu","18":"Bilinmeye
n youtube-dl hatası","19":"Dosya silinemedi","20":"Sessize alınamadı","21":"�
�zel ses düzeyi ayarlanamadı","error":"Hata","backendFunctionMissing":"Arka u�
� işlevi eksik: {
functionName}
"}
,"windows":{
"restartAsAdmin":"Yönetici olarak yeniden başlat","administrativePrivilegesNee
ded":"Yönetici ayrıcalıkları gerekli!","automaticSetup":"Otomatik kurulum","
selectMic":"Lütfen mikrofonunuzu seçin ve devam edin","virtualAudioCableMiscon
figuration":"Sanal Ses Kablonuzun doğru şekilde kurulmadığını tespit ettik
.","badConfiguration":"Kötü yapılandırma algılandı","setUpNow":"Şimdi kur
","detectedMisconfiguration":"VB-Cable ile bir yanlış yapılandırma tespit ed
ildi"}
,"customVolume":{
"setFor":"{
soundName}
 için ses seviyesini ayarla","context":"Özel ses seviyesini ayarla"}
}
')}
}
);
