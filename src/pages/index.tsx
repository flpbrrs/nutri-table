import Card from "@/components/layout/Card";
import Header from "@/components/layout/Header";
import Page from "@/components/layout/Page";
import { Table, TableBody, TableHeader, TableItem, TableRow } from "@/components/layout/Table";
import { IconBowlChopsticks, IconBurger, IconFridge, IconMeat, IconPlus, IconToolsKitchen } from "@tabler/icons-react";

export default function Home() {
    return (
        <Page>
            <Header
                title="Dashboard de Nutrição Diária"
                subtitle="Controle a sua ingestão de calorias de forma fácil"
                larger
                renderActions={() => (
                    <button type="button" className="text-sm hover:underline hover:text-emerald-200">
                        Editar Meta
                    </button>
                )}
            />
            <div className="flex gap-4 justify-between my-8">
                <Card label="Calorias Totais" icon={<IconToolsKitchen />} unit="Calorias">
                    3000
                </Card>
                <Card label="Proteinas" icon={<IconMeat />} unit="Gramas">
                    26
                </Card>
                <Card label="Carboidratos" icon={<IconBowlChopsticks />} unit="Gramas">
                    20
                </Card>
                <Card label="Gorduras" icon={<IconBurger />} unit="Gramas">
                    10
                </Card>
            </div>
            <Header
                title="Registre os alimentos do dia"
                renderActions={() => (
                    <div className="flex space-x-3">
                        <button
                            type="button"
                            className="hover:scale-110 transition-transform text-gray-400 hover:text-gray-50"
                        >
                            <IconFridge stroke={2} />
                        </button>
                        <button
                            type="button"
                            className="flex gap-1 items-center p-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 hover:scale-110 transition-transform"
                        >
                            <IconPlus className="size-full" />
                        </button>
                    </div>
                )}
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableItem scope="col" data="Alimento" />
                        <TableItem scope="col" data="Quantidade" />
                        <TableItem scope="col" data="Calorias" />
                        <TableItem scope="col" data="Proteinas" />
                        <TableItem scope="col" data="Carboidratos" />
                        <TableItem scope="col" data="Gorduras" />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableItem scope="row" data="Arroz branco cozido" />
                        <TableItem scope="row" data="100g" />
                        <TableItem scope="row" data="124kcal" />
                        <TableItem scope="row" data="2.6g" />
                        <TableItem scope="row" data="1g" />
                        <TableItem scope="row" data="25.8g" />
                    </TableRow>
                </TableBody>
            </Table>
        </Page>
    );
}
