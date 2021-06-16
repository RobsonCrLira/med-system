import { Injectable } from '@nestjs/common';
import * as soap from 'soap';
import { AppError } from 'src/errors/AppError';

@Injectable()
export class CorreiosConsultaService {
  async opcao1(cep: string) {
    const xhr = new XMLHttpRequest();
    const url = `https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl/consultaCEP/${cep}`;
    let documento;
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        documento = xhr.response;
        documento = JSON.parse(documento);
        console.log(documento);
      } else {
        return new AppError(xhr.statusText);
      }
    };
    xhr.open('GET', url);
    xhr.send;
  }
}
