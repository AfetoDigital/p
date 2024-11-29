
        // Data inicial do relacionamento (alterar para a data correta)
        const startDate = new Date("2024-10-01T00:00:00");

        function updateTimer() {
          const currentTime = new Date();
          const timeDiff = currentTime - startDate;

          // Calcular os dias, horas, minutos e segundos
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

          // Exibir o tempo no formato "XX dias, XX horas, XX minutos, XX segundos"
          document.getElementById(
            "timer"
          ).innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
        }

        // Atualizar o cronômetro a cada segundo
        setInterval(updateTimer, 1000);