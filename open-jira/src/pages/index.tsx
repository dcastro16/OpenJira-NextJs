import { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";
import { EntryStatus } from "@/interfaces";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 80px)" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry />
              <EntryList status={EntryStatus.PENDING} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 80px)" }}>
            <CardHeader title="En progreso" />
            <CardContent>
              <EntryList status={EntryStatus.IN_PROGRESS} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 80px)" }}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList status={EntryStatus.COMPLETED} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
