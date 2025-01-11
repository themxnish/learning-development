--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.players (player_id, name, age, nationality, role) FROM stdin;
1	Virat Kohli	36	India	Batsman
2	Rohit Sharma	37	India	Batsman
3	Jasprit Bumrah	31	India	Bowler
4	Shubman Gill	25	India	Batsman
5	Ravindra Jadej	36	India	All-Rounder
6	Steve Smith	36	Australia	Batsman
7	Pat Cummins	31	Australia	Bowler
8	Glenn Maxwell	36	Australia	All-Rounder
9	Mitchell Starc	34	Australia	Bowler
10	Aiden Markram	30	South Africa	Batsman
11	Joe Root	34	England	Batsman
12	Jos Buttler	34	England	Wicketkeeper
13	Ben Stokes	33	England	All-Rounder
14	Jofra Archer	29	England	Bowler
15	Shaheen Afridi	24	Pakistan	Bowler
16	Babar Azam	30	Pakistan	Batsman
17	Mohammad Rizwan	32	Pakistan	Wicketkeeper
18	Kane Williamson	34	New Zealand	Batsman
19	Trent Boult	35	New Zealand	Bowler
20	Marco Jensen	24	South Africa	All-Rounder
\.


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teams (team_id, team_name, captain_id) FROM stdin;
1	India	2
2	Australia	7
3	England	12
4	Pakistan	15
5	New Zealand	18
6	South Africa	10
\.


--
-- Data for Name: matches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.matches (match_id, team1_id, team2_id, match_date, venue) FROM stdin;
1	1	2	2024-02-01	Wankhede Stadium, Mumbai
2	3	4	2024-02-05	Sydney Cricket Ground, Sydney
3	5	1	2024-02-10	Lord’s Cricket Ground, London
4	2	6	2024-02-15	Eden Park, Auckland
5	4	5	2024-02-20	Gaddafi Stadium, Lahore
6	6	3	2024-03-01	Newlands Cricket Ground, Cape Town
7	1	6	2024-03-08	Arun Jaitley Stadium, Delhi
8	5	2	2024-03-15	Adelaide Oval, Adelaide
9	4	3	2024-03-22	Kensington Oval, Barbados
10	2	6	2024-03-29	The Oval, London
\.


--
-- Data for Name: player_stats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.player_stats (stat_id, player_id, match_id, runs_scored, wicket_taken, catches) FROM stdin;
1	1	1	75	0	2
2	2	1	85	0	1
3	7	1	50	2	0
4	6	1	45	0	1
5	12	2	95	0	3
6	11	2	65	2	1
7	15	2	80	0	2
8	16	2	50	0	3
9	18	3	105	1	1
10	2	3	40	0	2
11	3	3	20	3	1
12	5	3	10	0	1
13	6	4	85	0	1
14	7	4	25	4	1
15	10	4	55	1	2
16	19	4	20	1	1
17	15	5	75	0	1
18	16	5	45	0	2
19	12	5	30	0	1
20	13	5	60	2	2
21	10	6	50	0	3
22	19	6	35	2	1
23	18	6	90	1	1
24	9	6	15	3	2
25	2	7	70	0	1
26	5	7	40	3	2
27	19	7	25	2	1
28	10	7	50	1	2
29	18	8	110	0	2
30	6	8	70	0	1
31	9	8	30	4	2
32	7	8	20	2	1
33	15	9	95	0	3
34	12	9	55	0	2
35	14	9	20	4	1
36	13	9	30	1	2
37	6	10	65	1	1
38	7	10	45	2	1
39	10	10	55	0	2
40	19	10	25	1	1
\.


--
-- Name: matches_match_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.matches_match_id_seq', 10, true);


--
-- Name: player_stats_stat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.player_stats_stat_id_seq', 40, true);


--
-- Name: players_player_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.players_player_id_seq', 20, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 6, true);


--
-- PostgreSQL database dump complete
--

