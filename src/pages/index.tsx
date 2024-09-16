import Card from "@/components/layout/Card";
import Header from "@/components/layout/Header";
import Page from "@/components/layout/Page";
import { Table, TableBody, TableHeader, TableItem, TableRow } from "@/components/layout/Table";
import { IconBowlChopsticks, IconBurger, IconMeat, IconToolsKitchen } from "@tabler/icons-react";

export default function Home() {
    return (
        <Page>
            <Header
                title="Dashboard de Nutrição Diária"
                subtitle="Controle a sua ingestão de calorias de forma fácil"
                larger
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
            <Header title="Registre os alimentos do dia" />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableItem scope="col" data="Alimento" />
                        <TableItem scope="col" data="Quantidade" />
                        <TableItem scope="col" data="Proteinas" />
                        <TableItem scope="col" data="Carboidratos" />
                        <TableItem scope="col" data="Gorduras" />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableItem scope="row" data="Arroz" />
                        <TableItem scope="row" data="80g" />
                        <TableItem scope="row" data="4g" />
                        <TableItem scope="row" data="76g" />
                        <TableItem scope="row" data="0g" />
                    </TableRow>
                </TableBody>
            </Table>
        </Page>
    );
}
