import React, { useEffect, useState } from "react";
import ClientCard from "react-tinder-card";
import "./PossibleClientsList.css";
import Graph from "../../scripts/graph.js";
import { mergeSort } from "../../scripts/merge.js";
import ClientsModal from "../ClientsModal/ClientsModal";
import Top from "../Top/Top";
import usersMock from "../../data/users-mock";

const data = usersMock;

function PossibleClientsList() {
  const [distance, setDistance] = useState([]);
  const [possibleClients, setPossibleClients] = useState([]);
  const [clients, setClients] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(null);

  const swiped = (direction, newClient) => {
    if (direction === "right") {
      const c = clients;
      c.push(newClient);
      setClients(c);
    }
  };

  async function getAndPrepairData() {
    const peopleList = data;
    setPossibleClients(peopleList);
    prepairScript(peopleList);
    ordering(peopleList);
  }

  async function prepairScript(possibleClients) {
    let p1 = "";
    let g = new Graph();

    let d = await possibleClients.map((p, index) => {
      g.addVertex(p.id);

      if (index === 0) {
        p1 = p.id;
      }

      if (index > 0) {
        g.addEdge(`${p1}`, p.id, p.distance);
      }

      return {
        id: p.id,
        distance: p.distance,
      };
    });

    setDistance(d);
    g.dijkstra(d[0].id);
  }

  async function ordering(pl) {
    let distances = await pl.map((p) => {
      return p.distance;
    });

    setDistance(distances);
    let ordDistances = mergeSort(distances);

    let ordpl = [];

    for (let j = 0; j < ordDistances.length; j++) {
      for (let i = 0; i < pl.length; i++) {
        if (ordDistances[j] === pl[i].distance) {
          ordpl.push(pl[i]);
        }
      }
    }

    ordpl.reverse();
    setPossibleClients(ordpl);
  }

  useEffect(() => {
    getAndPrepairData();
  }, []);

  console.log();
  return (
    <>
      <Top onPressButton={() => setIsOpenModal(!isOpenModal)} />
      <div>
        <div className="divCard">
          {possibleClients &&
            possibleClients.length &&
            possibleClients.map((possibleClient) => (
              <>
                <ClientCard
                  className="swipe"
                  key={possibleClient.id}
                  onSwipe={(dir) => swiped(dir, possibleClient)}
                >
                  <div
                    className="card"
                    style={{
                      backgroundImage: `url(${possibleClient.avatar})`,
                    }}
                  >
                    <div className="content">
                      <p>Veículo: {possibleClient.vehicle}</p>
                      <p>Distancia localização: {possibleClient.distance}km</p>
                      <p>Proprietario: {possibleClient.name}</p>
                      <p>Idade proprietario: {possibleClient.age}</p>
                    </div>
                  </div>
                </ClientCard>
              </>
            ))}
        </div>
        <div className="dragTip">
          <div>
            <p>
              {`<--`} Arraste para o lado esquerdo para pular potencial cliente
            </p>
          </div>
          <div>
            <p>
              Arraste para o lado direito para adicionar potencial cliente{" "}
              {`-->`}
            </p>
          </div>
        </div>
      </div>

      {isOpenModal && (
        <ClientsModal
          users={clients}
          handleClose={() => setIsOpenModal(false)}
        />
      )}
    </>
  );
}

export default PossibleClientsList;
