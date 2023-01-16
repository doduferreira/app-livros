exports.getMesAtual = (retorno_atual) => {
  const hoje = new Date();
  retorno_atual = retorno_atual.replace('.0', '');
  let dia;

  let mes = retorno_atual.slice(-2);
  // let ano = String(hoje.getFullYear()).slice(-2);
  // let anoAnterior = String(hoje.getFullYear() - 1).slice(-2);

  let ano = retorno_atual.slice(2, 4);
  let anoAnterior = String(parseInt(ano) - 1);

  console.log(retorno_atual);
  console.log(mes);
  console.log(ano);
  console.log(anoAnterior);
  let lista = [];
  let jan = 'Jan/';
  let fev = 'Fev/';
  let mar = 'Mar/';
  let abr = 'Abr/';
  let mai = 'Mai/';
  let jun = 'Jun/';
  let jul = 'Jul/';
  let ago = 'Ago/';
  let set = 'Set/';
  let out = 'Out/';
  let nov = 'Nov/';
  let dez = 'Dez/';

  jan += ano;
  fev += ano;
  mar += ano;
  abr += ano;
  mai += ano;
  jun += ano;
  jul += ano;
  ago += ano;
  set += ano;
  out += ano;
  nov += ano;
  dez += ano;

  if (mes === '01') {
    fev = fev.replace(ano, anoAnterior);
    mar = mar.replace(ano, anoAnterior);
    abr = abr.replace(ano, anoAnterior);
    mai = mai.replace(ano, anoAnterior);
    jun = jun.replace(ano, anoAnterior);
    jul = jul.replace(ano, anoAnterior);
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez, jan];
  } else if (mes === '02') {
    mar = mar.replace(ano, anoAnterior);
    abr = abr.replace(ano, anoAnterior);
    mai = mai.replace(ano, anoAnterior);
    jun = jun.replace(ano, anoAnterior);
    jul = jul.replace(ano, anoAnterior);
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [mar, abr, mai, jun, jul, ago, set, out, nov, dez, jan, fev];
  } else if (mes === '03') {
    abr = abr.replace(ano, anoAnterior);
    mai = mai.replace(ano, anoAnterior);
    jun = jun.replace(ano, anoAnterior);
    jul = jul.replace(ano, anoAnterior);
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [abr, mai, jun, jul, ago, set, out, nov, dez, jan, fev, mar];
  } else if (mes === '04') {
    mai = mai.replace(ano, anoAnterior);
    jun = jun.replace(ano, anoAnterior);
    jul = jul.replace(ano, anoAnterior);
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [mai, jun, jul, ago, set, out, nov, dez, jan, fev, mar, abr];
  } else if (mes === '05') {
    jun = jun.replace(ano, anoAnterior);
    jul = jul.replace(ano, anoAnterior);
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [jun, jul, ago, set, out, nov, dez, jan, fev, mar, abr, mai];
  } else if (mes === '06') {
    jul = jul.replace(ano, anoAnterior);
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [jul, ago, set, out, nov, dez, jan, fev, mar, abr, mai, jun];
  } else if (mes === '07') {
    ago = ago.replace(ano, anoAnterior);
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [ago, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul];
  } else if (mes === '08') {
    set = set.replace(ano, anoAnterior);
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago];
  } else if (mes === '09') {
    out = out.replace(ano, anoAnterior);
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago, set];
  } else if (mes === '10') {
    nov = nov.replace(ano, anoAnterior);
    dez = dez.replace(ano, anoAnterior);
    lista = [nov, dez, jan, fev, mar, abr, mai, jun, jul, ago, set, out];
  } else if (mes === '11') {
    dez = dez.replace(ano, anoAnterior);
    lista = [dez, jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov];
  } else if (mes === '12') {
    lista = [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez];
  }
  // console.log(lista);
  return lista;
};

exports.formataData = () => {
  // var data = new Date();
  var d = new Date();
  var anoC = d.getFullYear();
  var mesC = d.getMonth() - 4;

  var data = new Date(anoC, mesC, 1);
  // var data = new Date(anoC, mesC + 1, 0);

  var diaS = data.getDay();
  var diaM = data.getDate();
  var mes = data.getMonth();
  var ano = data.getFullYear();

  switch (
    diaS //converte o numero em nome do dia
  ) {
    case 0:
      diaS = 'Domingo';
      break;
    case 1:
      diaS = 'Segunda-feira';
      break;
    case 2:
      diaS = 'Terça-feira';
      break;
    case 3:
      diaS = 'Quarta-feira';
      break;
    case 4:
      diaS = 'Quinta-feira';
      break;
    case 5:
      diaS = 'Sexta-feira';
      break;
    case 6:
      diaS = 'Sabado';
      break;
  }

  if (diaM.toString().length == 1) diaM = '0' + diaM;
  mes = mes + 1;

  var mydate = new Date(ano + '-' + mes + '-' + diaM);

  return diaS + ', ' + diaM + '/' + mes + '/' + ano;
};

exports.formataCnpj = (v) => {
  v = v.replace(/^(\d{2})(\d)/, '$1.$2');

  //Coloca ponto entre o quinto e o sexto dígitos
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');

  //Coloca uma barra entre o oitavo e o nono dígitos
  v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');

  //Coloca um hífen depois do bloco de quatro dígitos
  v = v.replace(/(\d{4})(\d)/, '$1-$2');
  return v;
};

exports.formataMoeda = (valor) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formatter.format(valor);
};

exports.formataRetorno = (valor) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formatter.format(valor).replace('R$', '');
};

exports.formataRisco = (risco) => {
  risco = risco.replace('.0', '');
  if (risco === '1') {
    return 'Baixo';
  } else if (risco === '2') {
    return 'Médio Baixo';
  } else if (risco === '3') {
    return 'Médio';
  } else if (risco === '4') {
    return 'Médio Alto';
  } else if (risco === '5') {
    return 'Alto';
  } else {
    return 'Não Classificado';
  }
};

exports.formataNomeFundo = (stringCorrigidaAlteracao) => {
  let stringCorrigida = stringCorrigidaAlteracao.toString().replace('.0', '');
  return stringCorrigida
    .replace('Multimercado', 'MM')
    .replace('Crédito Privado', 'CP')
    .replace('Longo Prazo', 'LP')
    .replace('Renda Fixa', 'RF')
    .replace('Fundo de ', '')
    .toUpperCase();
};

exports.formataClasse = (stringCorrigidaAlteracao) => {
  let stringCorrigida = stringCorrigidaAlteracao.toString().replace('.0', '');
  return stringCorrigida
    .replace('Fundo', ' ')
    .replace('de', '')
    .replace('0', 'Não Classificado')
    .toUpperCase();
};

exports.formataCorretora = (stringCorrigidaAlteracao) => {
  let stringCorrigida = stringCorrigidaAlteracao.toString().replace('.0', '');
  return stringCorrigida
    .replace('ITAU', 'Itaú')
    .replace('Bradesco', 'Bradesco')
    .replace('Santander', 'Santander')
    .replace('BTG', 'BTG Pactual')
    .replace('Caixa', 'Caixa Econômica')
    .replace('XP', 'XP Investimentos')
    .replace('Orama', 'Órama')
    .toUpperCase();
};

exports.formataListaOrdenacao = (stringCorrigidaAlteracao) => {
  let stringCorrigida = stringCorrigidaAlteracao.toString().replace('.0', '');
  return stringCorrigida
    .replace('menor_aplicacao_inicial', 'Aplicação Inicial')
    .replace('maior_retorno_mes', 'Maior Retorno no Mês')
    .replace('menor_retorno_mes', 'Menor Retorno no Mês')
    .replace('maior_retorno_ano', 'Maior Retorno no Ano')
    .replace('menor_retorno_ano', 'Menor Retorno no Ano')
    .replace('maior_retorno_12mes', 'Maior Retorno em 12 Meses')
    .replace('menor_retorno_12mes', 'Menor Retorno em 12 Meses')
    .replace('maior_cotistas', 'Maior Entrada de Investidores no Mês')
    .replace('menor_cotistas', 'Maior Saída de Investidores no Mês')
    .toUpperCase();
};
