// Ingreso de datos 
function rendimiento ()
 {
    var lote=Number(document.getElementById('lote').value);
    var frente=Number(document.getElementById('frente').value);
    var fondo=Number(document.getElementById('fondo').value);
    //Datos precargados
    var fot=1.8
    var pvcub=Number(document.getElementById('pv').value);
    var pvsemi=pvcub*0.5
    var suptotal=frente*fondo;
    var fos=suptotal*0.6
    var supedif=suptotal*fot;
    var mcub=supedif*0.7;
    var msemi=supedif*0.2;
    var mnov=supedif*0.1;
    var lotegast=lote*0.07;
    var lotefinal=lote+lotegast;
    var cmcub=700
    var cmsemi=cmcub*0.5
    var cmnov=cmcub*0.8
    var construc=mcub*cmcub+msemi*cmsemi+mnov*cmnov
    var loteyconst=construc+lotefinal
    var arq=construc*0.18
    var des=loteyconst*0.10
    var arqydes= arq+des
    var hab=suptotal*0.065
    var vterrazas=(fos*.8)*800
    var cocheras=(3.5*hab)/12.5
    var vcochera=cocheras*12000
    var consyarqydes= construc+arqydes
    var ctotal=lotefinal+consyarqydes
    var cmcuad=ctotal/supedif
    var vfcub=mcub*pvcub
    var vfsemi=msemi*pvsemi
    var vtotal=vfcub+vfsemi+vcochera+vterrazas
    var ganancia=(vtotal-ctotal).toFixed(2)
    var rendvf=(ganancia*100/ctotal).toFixed(2)
    var rendvp=rendvf*.3
    var invtotal=(ctotal).toFixed(2)
    var dormis=hab/2
    var terrazas=(fos*0.8)/25
    var retfondo=((fondo-20)/2).toFixed(2)
    document.getElementById('renvf').value=rendvf;
    document.getElementById('supedif').value=(supedif).toFixed(2);
    document.getElementById('invtotal').value=invtotal;
    document.getElementById('vtotal').value=(vtotal).toFixed(2);
    document.getElementById('ganancia').value=ganancia;
    document.getElementById('dormis').value=Math.round(dormis);
    document.getElementById('cocheras').value=Math.round(cocheras);
    document.getElementById('terrazas').value=Math.round(terrazas);
    document.getElementById('retfondo').value=Math.round(retfondo);
}




