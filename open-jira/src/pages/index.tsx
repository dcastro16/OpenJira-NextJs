import { NextPage } from "next";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";
import { EntryStatus } from "@/interfaces";
import { OrbitMenu } from "../components/ui/orbitMenu";
import Image from "next/image";

const mockedMenuItems = [
  "Electricos",
  "agua",
  "cables",
  "emergencias",
  "cables",
  "emergencias",
];

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      {/* <Grid container spacing={2}>
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
      </Grid> */}

      <OrbitMenu menuItems={mockedMenuItems}>
        <Image
          src="https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=2000"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </OrbitMenu>
    </Layout>
  );
};

export default HomePage;
