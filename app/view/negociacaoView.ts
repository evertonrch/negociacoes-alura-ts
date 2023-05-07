import NegociacaoService from "../services/negociacaoService.js";
import View from "./view.js";

export default class NegociacaoView extends View {

    template(negociacoes: NegociacaoService): string {
        return `
        <table class="table table-stripped table-hover table-bordered table-secondary">
            <thead class="text-center">
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody class="text-center">
                ${negociacoes.listar().map(negociacao => {
                    return `
                    <tr>
                        <td>
                            ${new Intl.DateTimeFormat("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            })
                            .format(negociacao.data)}
                        </td>
                        <td>
                            ${negociacao.quantidade}
                        </td>
                        <td>
                            ${negociacao.valor}
                        </td>
                    </tr>
                    `;
                }).join('')}
            </tbody>
        </table>        
        `;
    }

    update(negociacoes: NegociacaoService): void {
        this.elemento.innerHTML = this.template(negociacoes);
    }

}